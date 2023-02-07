const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const routeGuard = require('../route-guard/route-guard');
const multer = require('multer');
const upload = multer();

router.post('/', upload.none(), UserController.user_signup);

router.post('/verified', upload.none(), UserController.user_login );

router.delete('/:id', UserController.user_delete);

router.get('/', UserController.get_users );

module.exports = router;