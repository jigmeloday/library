if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
// const express = require('express')
const mongoose = require('mongoose')
// const app = express();
// const indexRouter = require('./src/routes/index')
//
mongoose.set("strictQuery", false);
mongoose.connect(process.env.BASE_URL)

const db = mongoose.connection;

db.on('error', error => console.log(error))
db.once('open', () => console.log('success'))

// app.use('/', indexRouter)
// app.listen(process.env.DEV_SERVER || 3000)

const http = require('http');
const app = require('./app')
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
