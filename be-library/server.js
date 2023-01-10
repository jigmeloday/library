const express = require('express')
const app = express();

app.listen(process.env.DEV_SERVER || 3000)