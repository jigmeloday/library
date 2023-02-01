const Category = require('../models/book');

exports.get_category = (req, res, next) => {
    Category.find().exec()
        .then((resp) =>
            res.status(200).json({ books: resp })
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