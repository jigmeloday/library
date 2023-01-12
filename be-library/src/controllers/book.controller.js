const Book = require('../models/book');
const mongoose = require('mongoose');


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

exports.update_book = ( req,res, next ) => {
    const id = req.params.id;
    const updateVal = {};
    for (const ops of req.body) {
        updateVal[ops.propName] = ops.value;
    }

    Book.update({_id: id}, { $set: updateVal })
        .exec()
        .then((resp) =>{
            if (resp) {
                res.status(201).json({book: resp})
            }else{
                res.status(400).json({error: 'not working'})
            }
        })
        .catch((error) => res.status(500).json({message:error }))
}

exports.post_book = (req, res, next) => {
    const book = new Book({
        _id:  new mongoose.Types.ObjectId(),
        title: req.body.title,
        isbn: req.body.isbn,
        category: req.body.category,
        price: req.body.price,
        quantity: req.body.quantity || 1,
        summary: req.body.summary,
        coverImage: req.file.path,
        author: req.body.author,
    })
    book.save()
        .then((resp) => {
            if (resp) {
                res.status(201).json({
                    message: book
                });
            } else{
                res.status(400).json({
                    message: 'bad request'
                });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: err })
        });
};

exports.delete_book = (req, res, next) => {
    const id = req.params.id;
    Book.findByIdAndDelete(id)
        .exec()
        .then((resp) => {
            if (resp) {
                res.status(201).json({message: resp })
            }else{
                res.status(404).json({message: 'Not Found'})
            }
        })
        .catch((err) => res.status(500).json({message: err}))
}