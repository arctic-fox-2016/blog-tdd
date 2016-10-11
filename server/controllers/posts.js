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
  res.status(200).json(posts)
}

function readRecord(req, res, next){
  Posts.find({},(err, result) => {
    if(result.length >= 1)
      res.status(200).json(result)
    else
      res.status(204).json({error:"Cannot read any record"})
  })
}

function updateRecord(req, res, next){
  Posts.findOne({
    _id:req.params.id
  },(err, posts) => {
    if(err) throw err
    if(posts){
      posts.title = req.body.title
      posts.slug = req.body.slug
      posts.content = req.body.content
      posts.tag = req.body.tag

      posts.save((err)=> {
        if(err) throw err
        res.status(200).json(posts)
      })
    } else {
      res.status(204).json({error: "Cannot find your record"})
    }
  })
}

function deleteRecord(req, res, next){
  Posts.findOne({
    _id:req.params.id
  },(err, posts) => {
    if(err) throw err
    if(posts){
      posts.remove((err)=> {
        if(err) throw err
        res.status(200).json(posts)
      })
    } else {
      res.status(204).json({error: "Cannot find your record"})
    }
  })
}
