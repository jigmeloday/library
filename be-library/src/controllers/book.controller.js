const Book = require('../models/book');


exports.get_books = (req, res) => {
    Book.find().exec().then((resp) => res.status(200).json({books: resp}).catch((err) => {
            res.status(500).json({message: err})
        })
    )
}

exports.get_book_by_id = (req, res) => {
    Book.findById(req.params.id).exec().then((book) =>
        {
            if(book){
                res.status(200).json(book)
            }else{
                res.status(404).json({message: 'Not Found'})
            }
        }
    ).catch((err) => {
        res.status(500).json({ message: err })
    })
}