require('dotenv').config();
const express = require('express');
const next = require('next');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV || 'production';
const app = next({dev});
const handle = app.getRequestHandler();

const base64Img = require('base64-img');

const Blog = require('../models/blog.model')

// MongoDB
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://phuc94:rvrtsHGFttXC5iVY@cluster0.0o4oe.mongodb.net/phuc94?retryWrites=true&w=majority')
    .then((res)=>{
        console.log('>>> Connected to MongoDB!!!')
        app
            .prepare()
            .then(()=>{
                
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

                // Base64 upload
                server.post('/add-img',(req,res)=>{
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
                })



                server.get('*', (req,res)=>{
                    return handle(req,res);
                });
                server.listen(PORT, err =>{
                    if (err) throw err;
                    console.log(`> Ready on ${PORT}`)
                });
            })
            .catch(exception =>{
                console.error(exception.stack);
                process.exit(1);
            })
        })
    .catch((err) => console.log(err));






