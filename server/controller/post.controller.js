const Post = require('../models/post.model');
const User = require('../models/user.model');
const helper = require('../utils/helper')

self = this;

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

self.getOwnerData = (req,res)=>{
    User.findOne({_id:req.query.userId.slice(0,25)})
        .then(user=>{
            const data = helper.basicUserDatafilter(user);
            res.send(data)
        })
        .catch((err)=>{console.log(err)})
};

self.getAllPost = (req,res) =>{
    Post.find()
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{console.log(err)});
};

self.getPost = (req,res) =>{
    Post.findOne({_id:req.query._id})
        .then((result)=>{
            console.log('8888888888888888888888888888888888888888')
            console.log(result)
            res.send(result);
        })
        .catch((err)=>{console.log(err)});
};

self.getUserPost = (req,res) => {
    User.findOne({_id: req.query.userId})
    .then(user=>{
        Post.find({'_id': {$in: user.userData.posts}})
            .then(posts=>{
                console.log('****************************************');
                console.log(posts);
                res.send(posts);
            })
    })
    .catch((err)=>{console.log(err)});
}
module.exports = self;
