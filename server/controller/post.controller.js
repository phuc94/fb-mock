const Post = require('../models/post.model');


self = this;

self.addPost = (req,res)=>{
    console.log('Request File: ',req);
    const newPost = new Post({
        userId: req.session.passport.user,
        body: req.body.content,
        img: req.body.img
    });
    newPost.save()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{console.log(err)});
};

self.getAllPost = (req,res) =>{
    Post.find()
        .then((result)=>{
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
