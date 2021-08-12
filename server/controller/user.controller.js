let User = require('../models/user.model');
const genPassword = require('../utils/password').genPassword;
const { searchEmail, checkFriendStatus, userDataFilter } = require('../utils/helper');
const passport = require('passport');

self = this;

/**** LOG IN ****/
self.logIn = (req,res,next) => {
    passport.authenticate('local', (err, user) => {
        req.logIn(user, function(err) {
            console.log(err)
        });
        if (user === false){
            res.send(user);
        } 
        else {
            const response = userDataFilter(user);
            res.send(response);
        }
    })(req, res, next)
};


/**** FRIEND REQUEST ****/
self.friendRequest = (req,res) => {
    let newReqPending = [];
    User.find({_id : req.user._id})
        .then((result)=>{
            newReqPending=result[0].reqPending;
            newReqPending.push(req.body.targetId);
            User.updateOne({_id : req.user._id},{reqPending : newReqPending})
            .then((result)=>{
                console.log(result);
                res.send(result);
                })
                .catch((err)=>{console.log(err)});
        })
        .catch((err)=>{console.log(err)});
};

/**** FRIEND REQUEST ****/
self.friendCancle = (req,res) => {
    let newReqPending = [];
    User.find({_id : req.user._id})
        .then((result)=>{
            newReqPending=result[0].reqPending;
            newReqPending.splice(newReqPending.indexOf(req.body.targetId));
            User.updateOne({_id : req.user._id},{reqPending : newReqPending})
            .then((result)=>{
                console.log(result);
                res.send(result);
                })
                .catch((err)=>{console.log(err)});
        })
        .catch((err)=>{console.log(err)});
};


/**** USER REGISTER ****/
self.userRegister = (req,res) =>{
    const saltHash = genPassword(req.body.password);
    
    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = new User({
        email: req.body.email,
        hash: hash,
        salt: salt,
        admin: false
    });
    newUser.save()
        .then((user) => {
            res.send('This is data')
        });
};

/**** SEARCH USER ****/
self.searchUser = (req,res) =>{
    User.find()
    .then((result)=>{
        const user = searchEmail(result,req.body.user);
        res.send(user);
    })
    .catch((err)=>{console.log(err)});
};

/**** CHECK OWNER ****/
self.checkOwner = (req,res) =>{
    const userId = req.query.userId.slice(1,req.query.targetId.length+1);
    const targetId = req.query.targetId;
    if (userId == targetId){
        res.send(true)
    }
    else {
        // TODO: check friend status
        User.find({_id : userId})
            .then(userObj=>{res.send(checkFriendStatus(userObj[0],targetId))})
    }
};

module.exports = self;