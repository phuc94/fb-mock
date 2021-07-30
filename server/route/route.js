require('dotenv').config();
const express = require('express');
const Blog = require('../../models/blog.model')
const PORT = process.env.PORT || 3000;
const base64Img = require('base64-img');

const server = express();

server.get('/api/shows', function (req,res){
    return res.end('We made it!');
});

// mongoDB
server.get('/add-blog', (req,res)=>{
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



server.get('/all-blogs',(req,res)=>{
    Blog.find()
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{console.log(err)});
});
server.get('/single-blog',(req,res)=>{
    Blog.findById('61027bab768913295094a876')
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{console.log(err)});
});



module.exports = server;