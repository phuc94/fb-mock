const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    img:{ 
        type: String
    }
}, {timestamps: true});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;