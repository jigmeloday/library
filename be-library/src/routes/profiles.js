const profileController = require('../controllers/profile.controller');
const express = require('express');
const router = express.Router();
const routeGuard = require('../route-guard/route-guard');

router.get('/', profileController.get_profile );
router.get('/:id', profileController.get_other_profile );
router.patch('/:id', profileController.update_profile)

module.exports = router;