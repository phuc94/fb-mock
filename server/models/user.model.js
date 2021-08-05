const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    admin: Boolean,
    firstName: String,
    lastname: String,
    dob: String,
    gender: String,
    detail: Object
})

const User = mongoose.model('User', userSchema, 'user');

module.exports = User;