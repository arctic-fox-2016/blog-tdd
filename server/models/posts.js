const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var postSchema = mongoose.Schema({
    title: String,
    slug: String,
    content: String,
    tag: String,
    createdAt: Date
});

module.exports= mongoose.model('posts', postSchema)
