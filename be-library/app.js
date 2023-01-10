const express = require('express');
const log = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const book = require('./src/routes/books');
const author = require('./src/routes/authors');


//Logger
app.use(log('dev'));

//bodyParser

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//route
app.use('/authors', author);
app.use('/authors', author);

//error handler
app.use((req, res, next) =>{
    const error = new Error('Not Found');
    error.status=404;
    next(error)
})

app.use((error, req, res, next ) => {
    res.status(error.status || 500);
    res.json({
        message: error.message
    })
})

module.exports = app;