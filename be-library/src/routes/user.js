const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const routeGuard = require('../route-guard/route-guard');

router.post('/signup', UserController.user_signup);

router.post('/signin', UserController.user_login );

router.delete('/:id', UserController.user_delete);

module.exports = router;