const mongoose = require('mongoose');

const userPhotoSchema = new mongoose.Schema({
    uploadDate: String
},{timestamps: true});

const userDataSchema = new mongoose.Schema({
    avatar: String,
    cover: String,
    photos: [userPhotoSchema]
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
    lastname: String,
    dob: String,
    gender: String,
    userData: userDataSchema,
    admin: Boolean
})

const User = mongoose.model('User', userSchema, 'user');

module.exports = User;