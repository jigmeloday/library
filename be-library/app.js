const express = require('express');
const log = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

const book = require('./src/routes/books');
const author = require('./src/routes/authors');
const user = require('./src/routes/user');
const profile = require('./src/routes/profiles');
const category = require('./src/routes/categories');

//Logger
app.use(log('dev'));
app.use('/files',express.static('files'));

//bodyParser

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(bodyParser.json());
//CORS
//not working need to check why?
// app.use((req,res, next) =>{
//     res.header("Access-Control-Allow-Credentials", 'include')
//     // res.header("Access-Control-Allow-Credentials", "true");
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
//     next();
// })

app.use(cors({
    allowedHeaders: 'Content-Type, Authorization',
    allowedMethods: 'GET, POST, PUT',
    allowCredentials: true,
    maxAge: 3600,
    exposedHeaders: 'Content-Type'
}));


//route
app.use('/authors', author);
app.use('/books', book);
app.use('/user', user);
app.use('/profile', profile);
app.use('/category', category);

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