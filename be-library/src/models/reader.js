const mongoose = require('mongoose');
const readerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    reader_id: String,
    book_id: String
});

module.exports = mongoose.model('Reader', readerSchema)