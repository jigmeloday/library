const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');

router.get('/', categoryController.get_category);
router.post('/', categoryController.post_category);

module.exports = router;