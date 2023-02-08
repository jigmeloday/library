const mongoose = require('mongoose');
const Book = require('../models/book');
const Profile = require('../models/profile');
const Reader = require('../models/reader');
const jwt = require('jsonwebtoken');

exports.reader_request = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const readerID = jwt.verify(token, process.env.JWT_KEY).id;
        const reader = new Reader({
            _id: new mongoose.Types.ObjectId(),
            reader: readerID,
            book: req.body.id
        });
        reader.save().then(() => {
            res.status(201).json({message: 'Requested'});
        }).catch((error) => {
            res.status(500).json({message: error});
        });
    } catch (error) {
        res.status(500).json({message: error});
    }
};

exports.get_reader = async (req, res, next) => {
    try {
        const user = await Reader.find();
        const readerArray = [];
        for (const items of user){
            readerArray.push({
                book: await Book.findOne({ _id: items?.book }),
                user: await Profile.findOne({ uid: items?.reader })
            })
        }
        res.status(200).json(readerArray.reverse());
    } catch (error) {
        res.status(500).json({message: error});
    }
};

