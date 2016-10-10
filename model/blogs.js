var mg = require('mongoose'),
    conn = mg.createConnection('mongodb://localhost/blog-tdd')


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
    author    : ObjectId,
    title     : String,
    body      : String,
    date      : Date
});

var Comment = new Schema({
  name: { type: String, default: 'anonym' },
  age: { type: Number, min: 18, index: true },
  bio: { type: String, match: /[a-z]/ },
  date: { type: Date, default: Date.now }
});

export const mg.model('author', Author)
export const mg.model('blogppost', BlogPost)
export const mg.model('comment', Comment)
