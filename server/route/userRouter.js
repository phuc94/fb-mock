const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller')

router.post('/UserLogin', (req,res,next) =>{userController.logIn(req, res, next)});

router.post('/SearchUser',(req,res)=> {userController.searchUser(req,res)});

router.post('/AddFriend',(req,res)=>{userController.friendRequest(req,res)});

router.post('/FriendCancle',(req,res)=>{userController.friendCancle(req,res)});

router.post('/UserRegister', (req, res) => {userController.userRegister(req,res)});

router.get('/CheckOwner', (req,res)=>{userController.checkOwner(req,res)})

router.get('/logout', (req, res) => {
    req.logout();
    res.status(200).redirect('/login');
});


module.exports = router;