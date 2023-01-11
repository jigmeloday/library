const express = require('express');
const log = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const book = require('./src/routes/books');
const author = require('./src/routes/authors');
const user = require('./src/routes/user');


//Logger
app.use(log('dev'));
app.use('/files',express.static('files'))

//bodyParser

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
//CORS
// app.use((req,res, next) =>{
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, PATCH, GET');
//         return res.status(200).json({})
//     }
// });

//route
app.use('/authors', author);
app.use('/books', book);
app.use('/user', user)

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