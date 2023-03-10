const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    isbn: {
        type: Number,
        required: true
    },
    author: {
        type:String,
        required: true
    },
    price: Number,
    quantity: Number,
    category: {
        type: String,
        required: true
    },
    creatorId: String,
    coverImage: String,
    summary: String,
});

module.exports = mongoose.model('Book',bookSchema)