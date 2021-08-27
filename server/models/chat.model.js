const mongoose = require('mongoose');

const chatDataSchema = new mongoose.Schema({
    userId: String,
    message: String
},{timestamps: true});

const chatSchema = new mongoose.Schema({
    data: [chatDataSchema]
})

const Chat = mongoose.model('Chat', chatSchema, 'chat');

module.exports = Chat;