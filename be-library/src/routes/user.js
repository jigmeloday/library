const express = require('express');
const router = express.Router();
const User = require('../models/user');
const UserController = require('../controllers/user.controller');
const routeGuard = require('../route-guard/route-guard');

router.post('/signup', UserController.user_signup);

router.post('/signin', UserController.user_login );

router.get('/', routeGuard, UserController.user_listing);

router.delete('/:id', routeGuard, UserController.user_delete);

module.exports = router;