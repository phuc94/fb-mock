const Post = require('../models/post.model');
const User = require('../models/user.model');


self = this;

self.addPost = (req,res)=>{
    User.findOne({_id:req.user._id})
        .then(user=>{
            const newPost = new Post({
                userId: req.session.passport.user,
                content: req.body.content,
                ownerName: (user.lastName + ' ' + user.firstName),
                img: req.body.img
            });
            newPost.save()
                .then((result)=>{
                    res.send(result)
                })
                .catch((err)=>{console.log(err)});
        })
    
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
    Post.find({userId: req.query.userId})
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{console.log(err)});
}
module.exports = self;
