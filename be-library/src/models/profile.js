const mongoose = require('mongoose');
const profileSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    email: String,
    uid: String,
    firstName: String,
    lastName: String,
    phone: String,
    code: String,
    country: String,
});

module.exports = mongoose.model('Profile', profileSchema)