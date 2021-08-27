const Chat = require('../models/chat.model');
const User = require('../models/user.model');
const helper = require('../utils/helper')


self = this;

/*** GET CHAT DATA ***/
self.getChatData = (req,res)=>{
    let result={};
    Chat.findOne({_id: req.query.roomId})
        .then(room=>{
            result.roomData = room.data;
            User.findOne({_id: req.query.targetId})
                .then(target=>{
                    result.basicTargetData = helper.userDataFilter(target);
                    res.send(result);
                })
                .catch(err=>console.log(err));
        })
        .catch(err=>console.log(err));
    
};
