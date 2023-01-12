const Book = require('../models/book');
exports.get_books = (req, res) => {
    Book.find().exec().then((resp) => res.status(200).json({books: resp}).catch((err) => {
            res.status(500).json({message: err})
        })
    )
}