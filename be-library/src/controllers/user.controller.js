const User = require('../models/user');
const Profile = require('../models/profile');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

exports.user_login = async (req, res, next) => {
    const user = await User.find({email: req.body.email}).exec();
    if (!user.length) {
        return res.status(401).json({message: 'Email or Password is incorrect'});
    }
    bcrypt.compare(req.body.password, user[0].password, async (err, success) => {
        if (err) {
            return res.status(401).json({message: 'Email or Password is incorrect'});
        }
        if (success) {
            const token = jwt.sign(
                {email: user[0].email, id: user[0]._id},
                process.env.JWT_KEY,
                {
                    expiresIn: "2h"
                });
            const profile = await Profile.findOne({email: req.body.email});
            return res.status(200).json({
                message: 'Sign In Success',
                id: user[0]._id,
                token,
                profile,
            });
        }
        res.status(401).json({message: 'Unauthorized'});
    });
};

exports.user_signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({message: err});
        } else {
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                email: req.body.email,
                password: hash
            });
            user.save()
                .then((resp) => {
                    if (resp) {
                        const profile = new Profile({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            uid: resp.id,
                            name: '',
                            firstName: '',
                            lastName: '',
                            phone: '',
                            code: '',
                            country: '',
                        });
                        profile.save()
                            .then((resp) => {
                                if (resp) {
                                    res.status(201).json({message: 'user created'});
                                } else {
                                    res.status(400).json({message: 'bad request profile creation'});
                                }
                            })
                            .catch((error) => res.status(500).json({message: error}));
                    } else {
                        res.status(400).json({message: 'bad request'});
                    }
                })
                .catch((err) => {
                    if (err.code === 11000) {
                        res.status(400).json({message: 'email already taken'});
                    } else {
                        res.status(500).json({message: err});
                    }
                });
        }
    });
};

exports.user_delete = (req, res, next) => {
    const id = req.params.id;
    User.findByIdAndDelete(id).exec().then((user) => {
        if (user) {
            Profile.deleteOne({uid: id})
                .exec()
                .then((resp) => {
                    resp ? res.status(201).json({message: 'user deleted'}) : res.status(404).json({message: 'user not found'});
                })
                .catch((error) => res.status(400).json({message: 'something went wrong'}));
        } else {
            res.status(404).json({message: 'user not found'});
        }
    }).catch((error) => {
        res.status(500).json({message: error});
    });
};

exports.get_users = (req, res, next) => {
    Profile.find()
        .exec()
        .then((resp) => {
            res.status(200).json({user: resp});
        })
        .catch((error) => res.status(500).json({message: error}));
};
