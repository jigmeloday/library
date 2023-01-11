const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        require: true
    },
    author: {
        type:String,
        require: true
    },
    price: Number,
    category: {
        type: String,
        require: true
    },
    summary: String,
});

module.exports = mongoose.model('Book',bookSchema)