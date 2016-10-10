const Posts = require('../models/posts')

module.exports = {
  create:createRecord,
  read:readRecord,
  update:updateRecord,
  delete:deleteRecord
}

function createRecord(req, res, next){
  var posts = new Posts({
    title:req.body.title,
    slug:req.body.slug,
    content:req.body.content,
    tag:req.body.tag,
    createdAt:new Date()
  })

  posts.save()
  res.json(posts)
}

function readRecord(req, res, next){
  Posts.find({},(err,result) => {
    res.json(result)
  })
}

function updateRecord(req, res, next){
  Posts.findOne({
    _id:req.params.id
  },(err, posts) => {
    items.title = req.body.title
    items.slug = req.body.slug
    items.content = req.body.content
    items.tag = req.body.tag

    posts.save((err)=> {
      if(err) throw err
      res.json(posts)
    })
  })
}

function deleteRecord(req, res, next){
  Posts.findOne({
    _id:req.params.id
  },(err, posts) => {
    if(err)throw err
    items.remove((err)=> {
      if(err) throw err
      res.json(posts)
    })
  })
}
