const mongoose = require('mongoose');
const readerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    reader: String,
    book: String,
    verify: Boolean,
});

module.exports = mongoose.model('Reader', readerSchema)