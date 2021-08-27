let User = require('../models/user.model');
let Post = require('../models/post.model');
let Chat = require('../models/chat.model');
const postController = require('../controller/post.controller');
const genPassword = require('../utils/password').genPassword;
const helper = require('../utils/helper');
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
            const response = helper.userDataFilter(user);
            res.send(response);
        }
    })(req, res, next)
};


/**** CHECK OWNER ****/
self.checkOwner = (req,res) =>{
    /** Get basic user data **/
    User.findOne({_id : req.query.userId})
        .then(userObj=>{
            let userData = {
                email : userObj.email,
                firstName : userObj.firstName,
                lastName : userObj.lastName,
                avatar : userObj.userData.avatar,
                _id : userObj._id,
            };
            /** Check onwnership **/
            if (req.query.userId == req.query.targetId){
                const result = {
                    userData,
                    isOwner:true
                }
                res.send(result)
            }
            else {
                User.find({_id : req.query.userId})
                    .then(userObj=>{
                        const result = {
                            userData,
                            isOwner:helper.checkFriendStatus(userObj[0],req.query.targetId)
                        }
                        res.send(result);
                    })
            }
        })
        .catch((err)=>{console.log(err)});
    
};

/**** GET BASIC USER DATA ****/
self.getBasicUserData = (req,res) =>{
    let userId;
    if(typeof req.query.userId == 'object'){
        userId =  req.query.userId;
    }
    userId= req.query.userId;
    User.findOne({_id : userId})
        .then(userObj=>{
            if(userObj == {}){
                console.log('No user data!');
                res.send('No User data!');
                return;
            }
            let data = {
                email : userObj.email,
                firstName : userObj.firstName,
                lastName : userObj.lastName,
                avatar : userObj.userData.avatar,
                reqPending : userObj.reqPending,
                resPending : userObj.resPending,
                friends : userObj.friends,
                _id : userObj._id,
            };
            res.send(data);
        })
        .catch((err)=>{console.log(err)});   
};


/**** CHECK LOGGED IN ****/
self.checkLoggedIn = (req,res) =>{
    if(req.user._id){res.send(true)}
    else {res.redirect('/login')}
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
                res.send(result);
                })
                .catch((err)=>{console.log(err)});
        })
        .catch((err)=>{console.log(err)});
    let newResPending = [];
    User.findOne({_id : req.body.targetId})
        .then(target=>{
            newResPending = target.resPending.push(req.user._id);
            target.save();
        })
};

/**** CANCLE FRIEND REQUEST ****/
self.friendCancle = (req,res) => {
    let newReqPending = [];
    User.find({_id : req.user._id})
        .then((result)=>{
            newReqPending=result[0].reqPending;
            newReqPending.splice(newReqPending.indexOf(req.body.targetId));
            User.updateOne({_id : req.user._id},{reqPending : newReqPending})
            .then((result)=>{
                res.send(result);
                })
                .catch((err)=>{console.log(err)});
        })
        .catch((err)=>{console.log(err)});
};

/**** ACCEPT FRIEND REQUEST ****/
self.friendAccept = (req,res) => {
    /** Create chat room for both **/
    const newChatRoom = new Chat({
        data:[{
            userId: 'broadcast',
            message: 'Say hi to your new friend!'
        }]
    })
    newChatRoom.save()
        .then(room=>{
            /** Resquesting User **/
            User.findOne({_id : req.user._id})
                .then(user=>{
                    user.resPending.splice(user.resPending.indexOf(req.body.targetId));
                    const newFriend = {
                        userId: req.body.targetId,
                        chatRoom: room._id
                    }
                    user.friends.push(newFriend);
                    user.save().then(response=>{res.send(response)})
                })
                .catch((err)=>{console.log(err)});
            /** Target User **/
            User.findOne({_id : req.body.targetId})
                .then((target)=>{
                    target.reqPending.splice(target.reqPending.indexOf(req.user._id));
                    const newFriend = {
                        userId: req.user._id,
                        chatRoom: room._id
                    }
                    target.friends.push(newFriend);
                    target.save();
                })
                .catch((err)=>{console.log(err)});
        })
};


/**** USER REGISTER ****/
self.userRegister = (req,res) =>{
    const saltHash = genPassword(req.body.password);
    
    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = new User({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        hash: hash,
        salt: salt,
        admin: false,
        userData:{
            avatar: '',
            cover: ''
        }
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
        const user = helper.searchEmail(result,req.body.user);
        res.send(user);
    })
    .catch((err)=>{console.log(err)});
};


/**** GET USER PHOTOS ****/
self.getUserPhoto = (req,res) =>{
    User.findOne({_id: req.query.userId})
    .then(user=>{
        Post.find({'_id':{$in: user.userData.posts}})
            .then(posts=>{
                const photos = helper.getPhotoFromPost(posts)
                res.send(photos);
            })
    })
    .catch((err)=>{console.log(err)});
};

/**** UPLOAD AVATAR ****/
self.uploadAvatar = (req,res) =>{
    User.findOne({_id: req.user._id})
    .then(user=>{
        user.userData.avatar = req.body.img;
        user.save().then(response=>{res.send(response)});
        postController.addPost(req,res);
    })
    .catch((err)=>{console.log(err)});
};

/**** UPLOAD COVER ****/
self.uploadCover = (req,res) =>{
    User.findOne({_id: req.user._id})
    .then(user=>{
        user.userData.cover = req.body.img;
        user.save().then(response=>{res.send(response)});
    })
    .catch((err)=>{console.log(err)});
};

/**** GET USER DATA ****/
self.getUserData = (req,res) =>{
    User.find({'_id': {$in:req.query.userId}})
    .then(user=>{
    res.send(user)});
};


self.testRoute = (req,res) => {
    User.findOne({email : req.query.email}).then(email=>{
        email.userData.photos.push({img: req.query.avatar});
        email.save().catch(err=>console.log(err))
    }).catch(err=>console.log(err))
};

self.testRoute2 = (req,res) => {
    User.findOne({'userData.photos._id':req.query.id},).then(img=>{
        const result = img.userData.photos.id(req.query.id);
        res.send(result);
    }).catch(err=>console.log(err))
};



module.exports = self;