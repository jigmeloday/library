const express = require('express');
const multer = require('multer');
const router = express.Router();
const routeGuard = require('../route-guard/route-guard');
const bookController = require('../controllers/book.controller')

const storage = multer.diskStorage({
    destination: function (req, file,cb) {
        cb(null, './files/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
})

const upload = multer({storage});

router.get('/',  bookController.get_books);

router.get('/:id', bookController.get_book_by_id);

router.post('/', routeGuard, upload.single('coverImage') , bookController.post_book);

router.delete('/:id',routeGuard, bookController.delete_book)

router.patch('/:id',routeGuard, bookController.update_book)

module.exports = router;