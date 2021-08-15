let User = require('../models/user.model');
const postController = require('../controller/post.controller');
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


/**** CHECK OWNER ****/
self.checkOwner = (req,res) =>{
    const userId = req.query.userId.slice(1,25);
    const targetId = req.query.targetId;
    /** Get basic user data **/
    User.findOne({_id : userId})
        .then(userObj=>{
            let userData = {
                email : userObj.email,
                firstName : userObj.firstName,
                lastName : userObj.lastName,
                avatar : userObj.userData.avatar,
            };
            /** Check onwnership **/
            if (userId == targetId){
                const result = {
                    userData,
                    isOwner:true
                }
                res.send(result)
            }
            else {
                User.find({_id : userId})
                    .then(userObj=>{
                        const result = {
                            userData,
                            isOwner:checkFriendStatus(userObj[0],targetId)
                        }
                        res.send(result);
                    })
            }
        })
        .catch((err)=>{console.log(err)});
    
};

/**** GET BASIC USER DATA ****/
self.getBasicUserData = (req,res) =>{
    const userId = req.query.userId.slice(1,25);
    console.log('888888888888888888888888888888888888888888');
    console.log(userId);
    User.findOne({_id : userId})
        .then(userObj=>{
            let data = {
                email : userObj.email,
                firstName : userObj.firstName,
                lastName : userObj.lastName,
                avatar : userObj.userData.avatar,
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
        const user = searchEmail(result,req.body.user);
        res.send(user);
    })
    .catch((err)=>{console.log(err)});
};


/**** GET USER PHOTOS ****/
self.getUserPhoto = (req,res) =>{
    User.findOne({_id: req.query.userId})
    .then(user=>{
        res.send(user.userData.photos);
    })
};

/**** UPLOAD AVATAR ****/
self.uploadAvatar = (req,res) =>{
    User.findOne({_id: req.user._id})
    .then(user=>{
        user.userData.avatar = req.body.img;
        user.save().then(response=>{res.send(response)});
        postController.addPost(req,res);
    })
};

/**** UPLOAD COVER ****/
self.uploadCover = (req,res) =>{
    User.findOne({_id: req.user._id})
    .then(user=>{
        user.userData.cover = req.body.img;
        user.save().then(response=>{res.send(response)});
    })
};

/**** GET USER DATA ****/
self.getUserData = (req,res) =>{
    User.findOne({_id: req.query.userId})
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