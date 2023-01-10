const express = require('express');
const log = require('morgan');
const app = express();

// const book = require('./src/routes/authors');
const author = require('./src/routes/authors');

app.use(log('dev'))

app.use('/authors', author)

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