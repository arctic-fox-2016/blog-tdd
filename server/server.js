const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const port = process.env.PORT || 3000
var mongoose = require('mongoose')
var configDB = require('./config/database.js')
const routes = require('./routes/api')


mongoose.connect(configDB.url)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', routes)
app.use(bodyParser())

app.set('view engine', 'ejs')

app.listen(port)
console.log('Server is alive on port : ' +port);

module.exports = app
