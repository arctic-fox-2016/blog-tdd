var mg = require('mongoose'),
    conn = mg.connect('mongodb://localhost/blog-tdd')


var Schema = mg.Schema,
    ObjectId = Schema.ObjectId;

var Author = new Schema({
        first_name  : String,
        last_name   : String,
        phone       : String,
        email       : String,
        address     : String
    });

var BlogPost = new Schema({
    author    : {
      type: ObjectId,
      ref: 'author'
    },
    title     : String,
    body      : String,
    date      : Date
});

var Comment = new Schema({
  blogpost_id    : {
    type: ObjectId,
    ref: 'blogpost'
  },
  name: { type: String, default: 'anonym' },
  age: { type: Number, min: 18, index: true },
  bio: { type: String, match: /[a-z]/ },
  date: { type: Date, default: Date.now }
});

module.exports = {
  author : mg.model('author', Author),
  blogpost : mg.model('blogpost', BlogPost),
  comment : mg.model('comment', Comment)
}
