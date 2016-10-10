const mongoose = require('mongoose')
const Schema = mongoose.Schema

var userSchema = mongoose.Schema({
  username: String,
  password: String
})
