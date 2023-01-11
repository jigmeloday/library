const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

router.post('/signup', (req, res, next) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password: req.body.password
    });
    user.save()
        .then((resp) =>{
            if (resp) {
                res.status(201).json({message: 'user created'})
            } else {
                res.status(401).json({message: 'bad request'})
            }
        })
        .catch((err) => res.status(500).json({message: err}));
});


module.exports = router;