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
    following: [String],
    friends: [String],
    reqPending: [String],
    resPending: [String],
    firstName: String,
    lastname: String,
    dob: String,
    gender: String,
    detail: Object,
    admin: Boolean
})

const User = mongoose.model('User', userSchema, 'user');

module.exports = User;