const express = require('express')
const app = express();
const indexRouter = require('./src/routes/index')

app.use('/', indexRouter)
app.listen(process.env.DEV_SERVER || 3000)