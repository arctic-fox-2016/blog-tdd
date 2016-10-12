var mg = require('mongoose'),
    conn = mg.connect('mongodb://localhost/blog-tdd')


var Schema = mg.Schema,
    ObjectId = Schema.Types.ObjectId;

var Author = new Schema({
        first_name  : String,
        last_name   : String,
        phone       : String,
        email       : String,
        address     : String
    });
var User = new Schema({
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
    date      : Date,
    comments: [{
        text: String,
        postedBy: {
            type: ObjectId,
            ref: 'User'
        }
    }]
});
var Question = new Schema({
    user    : {
      type: ObjectId,
      ref: 'user'
    },
    title     : String,
    body      : String,
    date      : Date,
    comments: [{
        text: String,
        user: {
            type: ObjectId,
            ref: 'user'
        }
    }]
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
  user : mg.model('user', User),
  blogpost : mg.model('blogpost', BlogPost),
  question : mg.model('question', Question),
  comment : mg.model('comment', Comment)
}
