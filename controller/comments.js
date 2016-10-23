var  comment =  require('../model/blogs')

function insert_comment(req,res) {
  new comment.comment({
          name: req.body.name,
          age: req.body.age,
          bio: req.body.bio,
          date: req.body.date
      })
      .save(function (err) {
        if(err) {
          console.log(err);
        } else {
                  res.json({success:'ok', message: `${req.body.name} comment been saved`})
        }
      })
}


function update_comment(req,res) {
  comment.comment.update({_id:req.params.comment_id},{
          name: req.body.name,
          age: req.body.age,
          bio: req.body.bio,
          date: req.body.date
      }, function (err) {
        if(err) {
          console.log(err)
        } else{
                  res.json({success:'ok', message: `${req.body.name} comment   been updated`})
        }
      })
}
function delete_comment(req,res) {
  comment.comment.update({_id:req.params.comment_id}, function (err) {
        if(err) {
          console.log(err)
        } else {
          res.json({success:'ok', message: `${req.params.comment_id} been deleted`})
        }
      })
}

function find_comment(req,res) {
  comment.comment.find({_id:req.params.comment_id},function (err,result) {
      if(err){
        console.log(err)
      } else {
        res.json(result)
      }
  })
}

function find_all_comment(req,res) {
  comment.comment.find({},function (err,result) {
      if(err){
        console.log(err)
      } else {
        res.json(result)
      }
  })
}
module.exports = {
  insert_comment : insert_comment,
  update_comment: update_comment,
  delete_comment: delete_comment,
  find_comment : find_comment,
  find_all_comment: find_all_comment
}
