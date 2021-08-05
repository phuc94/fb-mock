const express = require('express');
const passport = require('passport');
const genPassword = require('../utils/password').genPassword;
const User = require('../models/user.model');
const router = express.Router();

router.post('/UserLogin', passport.authenticate('local', { failureRedirect: '/login', successRedirect: '/' }));

router.post('/UserRegister', (req, res, next) => {
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
            console.log(user);
        });

    res.redirect('/login');
 });

// New User
router.post('/createNewUser', (req,res) => {
    console.log('Making request!');
    console.log(req.body);
    // console.log('REQQQQQ>>>');
    // console.log(req);
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        dob: req.body.dob,
        detail: {}
    });
    newUser.save()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{console.log(err)});
});

router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/login');
});


module.exports = router;