const Book = require('../models/book');
const Category = require('../models/category');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const fs = require('fs');

exports.get_books = async (req, res, next) => {
    try{
       const books = await Book.find().exec();
       const bookArray = [];
       for (const book of books) {
           bookArray.push({
               ...book._doc,
               category: await Category.findOne({ _id: book.category })
           })
       }
       res.status(200).json({ book: bookArray.reverse() });
    } catch ( e) {
         res.status(500).json({ message: error })
    }
}

exports.get_book_by_id = async (req, res) => {
    try{
        const book = await Book.findById(req.params.id);
        res.status(200).json({ book: {...book._doc, category: await Category.findOne({ _id: book.category })} });

    } catch (e) {
        res.status(500).json({ message: error });
    }
}

exports.update_book = async ( req, res, next ) => {
    const id = req.body._id;
    const updateVal = req.body;
    const token = req.headers.authorization.split(" ")[1];
    const creatorId = jwt.verify(token, process.env.JWT_KEY).id;
    const book = await Book.findById(id);

    if (book.creatorId === creatorId) {
        Book.updateOne({_id: id}, { $set: updateVal })
            .exec()
            .then((resp) =>{
                if (resp) {
                    res.status(201).json({book: resp})
                }else{
                    res.status(400).json({error: 'not working'})
                }
            })
            .catch((error) => res.status(500).json({message:error }))
    } else {
        res.status(401).json({ message: 'Unauthorized' })
    }
}

exports.post_book = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const creatorId = jwt.verify(token, process.env.JWT_KEY).id;

    const book = new Book({
        _id:  new mongoose.Types.ObjectId(),
        title: req.body.title,
        isbn: req.body.isbn,
        category: req.body.category,
        price: req.body.price,
        quantity: req.body.quantity || 1,
        summary: req.body.summary,
        coverImage: req.file.path,
        creatorId: creatorId,
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

exports.delete_book = async (req, res, next) => {
    const id = req.params.id;
    const token = req.headers.authorization.split(" ")[1];
    const creatorId = jwt.verify(token, process.env.JWT_KEY).id;
    const book = await Book.findById(id);
    if ( creatorId ===  book.creatorId) {
        Book.findByIdAndDelete(id)
            .exec()
            .then((resp) => {
                if (resp) {
                    fs.unlink(resp.coverImage, function (err){
                        console.log(err)
                    })
                    res.status(201).json({message: resp })
                }else{
                    res.status(404).json({message: 'Not Found'})
                }
            })
            .catch((err) => res.status(500).json({message: err}))
    } else{
        res.status(401).json({ message: 'Unauthorized' })
    }
}