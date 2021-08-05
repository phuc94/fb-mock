const express = require('express');
const Blog = require('../models/blog.model');
const isAuth = require('../middleware/auth').isAuth;

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



router.get('/all-blogs',(req,res)=>{
    Blog.find()
        .then((result)=>{
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

router.post('/add-img',(req,res)=>{
    console.log('Request File: ',req.file);
    const imgString = base64Img.base64Sync(req.file.path);
    const blog = new Blog({
        title: req.body.name,
        snippet: req.body.name,
        body: req.body.name,
        img: imgString
    });
    blog.save()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{console.log(err)});
});

module.exports = router