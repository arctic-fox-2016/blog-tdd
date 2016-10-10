// app/models/user.js
// load the things we need
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

// define the schema for our user model
var blogSchema = mongoose.Schema({
    article: String,
    contributor: String,
    comments: String

});


// create the model for users and expose it to our app
module.exports = mongoose.model('blogs', blogSchema); // nama collection
