const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller')

router.post('/UserLogin', (req,res,next) =>{userController.logIn(req, res, next)});

router.get('/CheckOwner', (req,res)=>{userController.checkOwner(req,res)})

router.get('/CheckLoggedIn', (req,res)=>{userController.checkLoggedIn(req,res)})

router.post('/SearchUser',(req,res)=> {userController.searchUser(req,res)});

router.get('/GetBasicUserData',(req,res)=> {userController.getBasicUserData(req,res)});

router.post('/AddFriend',(req,res)=>{userController.friendRequest(req,res)});

router.post('/AcceptFriend',(req,res)=>{userController.friendAccept(req,res)});

router.post('/FriendCancle',(req,res)=>{userController.friendCancle(req,res)});

router.get('/GetSuggestFriend',(req,res)=>{userController.getSuggestFriend(req,res)});

router.post('/UserRegister', (req, res) => {userController.userRegister(req,res)});

router.get('/UserPhotos',(req,res)=>{userController.getUserPhoto(req,res)})

router.post('/UploadAvatar',(req,res)=>{userController.uploadAvatar(req,res)})

router.post('/UploadCover',(req,res)=>{userController.uploadCover(req,res)})

router.get('/GetUserData',(req,res)=>{userController.getUserData(req,res)})

router.get('/TestRoute',(req,res)=>{userController.testRoute(req,res)})
router.get('/TestRoute2',(req,res)=>{userController.testRoute2(req,res)})

router.get('/logout', (req, res) => {
    req.logout();
    res.status(200).redirect('/login');
});


module.exports = router;