const mongoose = require('mongoose');
const Category = require('../models/category');
const Book = require('../models/book');

exports.get_category = (req, res, next) => {
    Category.find().exec()
        .then((resp) =>
            res.status(200).json({ category: resp })
        )
        .catch((error) =>
            res.status(500).json({ message: error })
        )
}

exports.post_category = (req, res, next) => {
    const category = new Category({
        _id:  new mongoose.Types.ObjectId(),
        name: req.body.name,
    })
    category.save()
        .then((resp) => {
            if (resp) {
                res.status(201).json({
                    message: category
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

exports.get_category_by_id = async (req, res, next) => {
    const id = req.params.id;
    try{
       const books = await Book.find({ category: id });
        res.status(200).json({ books: books });
    } catch (e) {
        res.status(500).json({ message: e })
    }
}

exports.get_home_category = async (req, res, next) => {
    try{
        const categories = await Category.find();
        const categoryArray = [];
        for (const category of categories) {
            categoryArray.push({
                ...category._doc,
                book: await Book.find({ category: category._id  })
            });
        }
        console.log(categoryArray);
        res.status(200).json({ books: 'hello' });
    } catch (e) {
        res.status(500).json({ message: e })
    }
}