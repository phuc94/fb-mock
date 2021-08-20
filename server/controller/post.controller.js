const Post = require('../models/post.model');
const User = require('../models/user.model');
const helper = require('../utils/helper')
const mongoose = require('mongoose');


self = this;

/*** ADD POST ***/
self.addPost = (req,res)=>{
    newPost = new Post({
        userId: req.user._id,
        content: req.body.content,
        img: req.body.img
    });
    newPost.save()
        .then(post=>{
            User.findOne({_id:req.user._id})
                .then(user=>{
                    user.userData.posts.push(post._id);
                    user.save().then(result=>{
                        res.send(result)
                    })
                })
        })
        .catch((err)=>{console.log(err)});
};

/*** GET USER'S POST ***/
self.addComment = (req,res)=>{
    const id = mongoose.Types.ObjectId();
    Post.findOne({_id: req.body.postId})
        .then(post=>{
            const newComment ={
                comment: req.body.comment,
                userId: req.user._id,
                _id: id
            }
            post.comments.push(newComment)
            post.save().then(response=>{
                res.send(response)
            })
        }).catch(err=>{console.log(err)})
};

/*** GET PAGE/POST OWNER DATA ***/
self.getOwnerData = (req,res)=>{
    User.findOne({_id:req.query.userId.slice(0,25)})
        .then(user=>{
            const data = helper.basicUserDatafilter(user);
            res.send(data)
        })
        .catch((err)=>{console.log(err)})
};

/*** GET POST'S COMMENT ***/
self.fetchComment = (req,res)=>{
    Post.findOne({_id:req.query.postId})
        .then(post=>{
            res.send(post.comments);
        })
        .catch((err)=>{console.log(err)})
};

/*** GET ALL POST ***/
self.getAllPost = (req,res) =>{
    Post.find()
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{console.log(err)});
};

/*** LIKE POST ***/
self.likePost = (req,res) =>{
    Post.findOne({_id: req.body.postId})
        .then((post)=>{
            if (post.like.includes(req.user._id)){
                post.like.splice(post.like.indexOf(req.user._id,1))
            } 
            else {post.like.push(req.user._id)};
            post.save()
                .then(response=>{res.send(response.like)})
        })
        .catch((err)=>{console.log(err)});
};

/*** GET ONE POST ***/
self.getPost = (req,res) =>{
    Post.findOne({_id:req.query._id})
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{console.log(err)});
};

/*** GET USER'S POST ***/
self.getUserPost = (req,res) => {
    User.findOne({_id: req.query.userId})
    .then(user=>{
        Post.find({'_id': {$in: user.userData.posts}})
            .then(posts=>{
                res.send(posts);
            })
    })
    .catch((err)=>{console.log(err)});
}
module.exports = self;
