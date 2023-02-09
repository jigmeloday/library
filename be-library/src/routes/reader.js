const express = require('express');
const router = express.Router();
const Reader = require('../controllers/reader.controller');
const routeGuard = require('../route-guard/route-guard');
const multer = require('multer');
const upload = multer();

router.post('/', routeGuard, upload.none(), Reader.reader_request);

// router.post('/verified', upload.none(), UserController.user_login );

// router.delete('/:id', UserController.user_delete);

router.get('/', routeGuard, Reader.get_reader );

module.exports = router;