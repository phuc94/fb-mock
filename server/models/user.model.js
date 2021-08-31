const mongoose = require('mongoose');


const userDataSchema = new mongoose.Schema({
    avatar: String,
    cover: String,
    bookmark: [String],
    posts: [String]
});

const friendSchema = new mongoose.Schema({
    userId: String,
    chatRoom: String
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
    friends: [friendSchema],
    reqPending: [{userId:String}],
    resPending: [{userId:String}],
    firstName: String,
    lastName: String,
    dob: String,
    gender: String,
    userData: userDataSchema,
    admin: Boolean
})

const User = mongoose.model('User', userSchema, 'user');

module.exports = User;