const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    content:String,
    img:String
}, {timestamps: true});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;