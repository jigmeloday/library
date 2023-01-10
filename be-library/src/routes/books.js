const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: ['Bookq', 'Book2']
    });
});

router.get('/:id', (req, res) => {
    res.status(200).json({
        message: 'you did it'
    });
});

router.post('/', (req, res, next) => {
    const book = {
        title: req.body.title,
        category: req.body.category,
        summary: req.body.summary,
        author: req.body.author,
    }
    res.status(201).json({
        message: book
    });
});

module.exports = router;