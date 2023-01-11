const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

router.post('/signup', (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({message: err})
        } else{
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                email: req.body.email,
                password: hash
            });
            user.save()
                .then((resp) =>{
                    if (resp) {
                        res.status(201).json({message: 'user created'})
                    } else {
                        res.status(400).json({message: 'bad request'})
                    }
                })
                .catch((err) => {
                    if (err.code === 11000){
                        res.status(400).json({message: 'email already taken'})
                    }else{
                        res.status(500).json({message: err})
                    }
                });
        }
    });
});

router.post('/signin', (req, res, next) => {
    User.find({email: req.body.email}).exec().then((user) => {
        if (!user.length) {
           return res.status(401).json({message: 'Unauthorized'});
        }
        bcrypt.compare(req.body.password, user[0].password, (err, success) => {
            if (err) {
                return res.status(401).json({message: 'Unauthorized'});
            }
            if (success) {
                return res.status(200).json({ message: 'Sign In Success' })
            }
            res.status(401).json({message: 'Unauthorized'});
        } )
    })
})

router.get('/', (req, res,next) => {
    User.find().select('email').exec().then((user) => {
        res.status(200).json({user});
    }).catch((error) => res.status(500).json({message: error}));
})

router.delete('/:id', (req, res,next) => {
    const id = req.params.id;
    User.findByIdAndDelete(id).exec().then((user) =>{
        if (user) {
            res.status(201).json({message: user })
        } else {
            res.status(404).json({message: 'user not found'})
        }
    }).catch((error) => {
        res.status(500).json({message: error})
    });
});

module.exports = router;