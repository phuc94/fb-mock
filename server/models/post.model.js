const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comment: String,
    userId: String
},{timestamps: true});

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    content:String,
    like:[String],
    comments:[commentSchema],
    img:String
}, {timestamps: true});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;