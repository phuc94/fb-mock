const express = require('express');
const isAuth = require('../middleware/auth').isAuth;
const base64Img = require('base64-img');
const router = express.Router();

const postController = require('../controller/post.controller')

router.post('/AddPost', isAuth, (req,res)=>{postController.addPost(req,res)});

router.get('/AllPost', (req,res)=>{postController.getAllPost(req,res)});

router.get('/GetOwnerData', (req,res)=>{postController.getOwnerData(req,res)});

router.get('/GetPost', (req,res)=>{postController.getPost(req,res)});

router.get('/UserPost', isAuth, (req,res)=>{postController.getUserPost(req,res)});

module.exports = router