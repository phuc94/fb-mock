const express = require('express');
const router = express.Router();
// const base64Img = require('base64-img');

const chatController = require('../controller/chat.controller')

router.get('/GetChatData', (req,res)=>{chatController.getChatData(req,res)});


module.exports = router