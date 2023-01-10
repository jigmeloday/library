if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require('express')
const mongoose = require('mongoose')
const app = express();
const indexRouter = require('./src/routes/index')

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection;

db.on('error', error => console.log(error))
db.once('open', () => console.log('success'))

app.use('/', indexRouter)
app.listen(process.env.DEV_SERVER || 3000)