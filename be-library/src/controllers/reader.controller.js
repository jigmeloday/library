const mongoose = require('mongoose');
const Book = require('../models/book');
const Profile = require('../models/profile')

exports.reader_request = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const creatorId = jwt.verify(token, process.env.JWT_KEY).id;
    } catch (error) {

    }
};



