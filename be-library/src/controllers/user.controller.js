const User = require('../models/user');
const Profile = require('../models/profile');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');


exports.user_login = (req, res, next) => {
    User.find({email: req.body.email}).exec().then((user) => {
        if (!user.length) {
            return res.status(401).json({message: 'Unauthorized'});
        }
        bcrypt.compare(req.body.password, user[0].password, (err, success) => {
            if (err) {
                return res.status(401).json({message: 'Unauthorized'});
            }
            if (success) {
                const token = jwt.sign(
                    {email: user[0].email, id: user[0]._id},
                    process.env.JWT_KEY,
                    {
                        expiresIn: "2h"
                    });
                return res.status(200).json({
                    message: 'Sign In Success',
                    token
                });
            }
            res.status(401).json({message: 'Unauthorized'});
        } );
    });
}

exports.user_signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({message: err})
        } else{
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                email: req.body.email,
                password: hash
            });
            const profile = new Profile({
                _id: new mongoose.Types.ObjectId(),
                email: req.body.email,
                uid: user.id,
                name: '',
                firstName: '',
                lastName: '',
                phone: '',
                code: '',
                country: '',
            })
            user.save()
                .then((resp) =>{
                    if (resp) {
                        profile.save()
                            .then((resp) => {
                                if (resp) {
                                    res.status(201).json({message: 'user created'});
                                } else{
                                    res.status(400).json({message: 'bad request profile creation'});
                                }
                            })
                            .catch((error) =>   res.status(500).json({message: error}))
                    } else {
                        res.status(400).json({message: 'bad request'});
                    }
                })
                .catch((err) => {
                    if (err.code === 11000){
                        res.status(400).json({message: 'email already taken'});
                    }else{
                        res.status(500).json({message: err});
                    }
                });
        }
    });
}

exports.user_delete = (req, res,next) => {
    const id = req.params.id;
    User.findByIdAndDelete(id).exec().then((user) =>{
        if (user) {
            res.status(201).json({message: user });
        } else {
            res.status(404).json({message: 'user not found'});
        }
    }).catch((error) => {
        res.status(500).json({message: error});
    });
}

exports.user_listing = (req, res,next) => {
    User.find().select('email').exec().then((user) => {
        res.status(200).json({user});
    }).catch((error) => res.status(500).json({message: error}));
}