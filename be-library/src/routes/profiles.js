const profileController = require('../controllers/profile.controller');
const express = require('express');
const router = express.Router();
const routeGuard = require('../route-guard/route-guard');

router.get('/:id', profileController.get_profile );

module.exports = router;