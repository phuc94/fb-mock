const express = require('express');
const Post = require('../models/post.model');
const isAuth = require('../middleware/auth').isAuth;
const base64Img = require('base64-img');

const router = express.Router();
router.get('/add-blog', (req,res)=>{
    const blog = new Blog({
        title: 'test',
        snippet: 'test',
        body: 'test'
    });
    blog.save()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{console.log(err)});
});



router.get('/AllPost',(req,res)=>{
    Post.find()
        .then((result)=>{
            // console.log(result);
            res.send(result);
        })
        .catch((err)=>{console.log(err)});
});

router.get('/single-blog',isAuth, (req,res)=>{
    Blog.findById('61027bab768913295094a876')
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{console.log(err)});
});



router.post('/AddPost',(req,res)=>{
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
});

module.exports = router