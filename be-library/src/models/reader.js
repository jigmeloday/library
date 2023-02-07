const mongoose = require('mongoose');
const readerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    reader: String,
    book: String
});

module.exports = mongoose.model('Reader', readerSchema)