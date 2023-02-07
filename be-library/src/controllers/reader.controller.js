const mongoose = require('mongoose');
const Book = require('../models/book');
const Profile = require('../models/profile');
const Reader = require('../models/reader');

exports.reader_request = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const readerID = jwt.verify(token, process.env.JWT_KEY).id;
    try {
       const reader = new Reader({
           _id: new mongoose.Types.ObjectId(),
           reader: readerID,
           book: req.body.id
       });
       reader.save().then(() => {
          res.status(201).json({ message: 'Requested' })
       }).catch((error) => {
           res.status(500).json({ message: error })
       })
    } catch (error) {
        res.status(500).json({ message: error })
    }
};

exports.get_reader = async (req, res, next) => {
    try{
        const user = await Profile.find();
        const reader = await Reader.find();
        const readerArray = [];
        for (const reader of items){
            readerArray.push({
                book: await Book.find({ _id: items?.book })
            })
        }
        res.status(200).json({ message: readerArray });
    } catch (error){
        res.status(500).json({ message: error });
    }
}

