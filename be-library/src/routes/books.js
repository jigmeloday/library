const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Book = require('../models/book');

router.get('/', (req, res) => {
    Book.find().exec().then((resp) => res.status(200).json({books: resp}).catch((err) => {
            res.status(500).json({message: err})
        })
    )
});

router.get('/:id', (req, res) => {
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
});

router.post('/', (req, res, next) => {
    const book = new Book({
        _id:  new mongoose.Types.ObjectId(),
        title: req.body.title,
        category: req.body.category,
        price: req.body.price,
        summary: req.body.summary,
        author: req.body.author,
    })
    book.save()
        .then((resp) => {
            if (resp) {
                res.status(201).json({
                    message: book
                });
            } else{
                res.status(401).json({
                    message: 'bad request'
                });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: err })
        });
});

router.delete('/:id', (req, res, next) => {
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
})

router.patch('/:id', ( req,res, next ) => {
     const id = req.params.id;
     const updateVal = {};
     for (const ops of req.body) {
         updateVal[ops.propName] = ops.value;
     }

     Book.update({_id, id}, { $set: updateVal })
         .exec()
         .then((resp) =>{
             if (resp) {
                 res.status(201).json({book: resp})
             }else{
                 res.status(401).json({error: 'not working'})
             }
         })
         .catch((error) => res.status(500).json({message:error }))
})

module.exports = router;