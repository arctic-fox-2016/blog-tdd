let mongoose = require('mongoose')
let Schema = mongoose.Schema

var contentsSchema = mongoose.Schema({
  author: String,
  createdAt : Date,
  title : String,
  post : String
})

// Sets the createdAt parameter equal to the current time
contentsSchema.pre('save', next => {
  if (!this.createdAt) {
    this.createdAt = new Date()
  }
  next()
})


module.exports = mongoose.model('contents', contentsSchema)

// ### Models: Contents
// - author : String,
// - dt_created : Date,
// - title : String,
// - post : String
