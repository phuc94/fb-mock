const mongoose = require('mongoose');


const userDataSchema = new mongoose.Schema({
    avatar: String,
    cover: String,
    posts: [String]
});

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
    lastName: String,
    dob: String,
    gender: String,
    userData: userDataSchema,
    admin: Boolean
})

const User = mongoose.model('User', userSchema, 'user');

module.exports = User;