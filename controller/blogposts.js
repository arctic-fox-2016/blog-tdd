var  blogpost =  require('../model/blogs')

function insert_blogpost(req,res) {
  new blogpost.blogpost({
            author    : req.body.author,
            title     : req.body.title,
            body      : req.body.body,
            date      : req.body.date
      })
      .save(function (err) {
        if(err) {
          console.log(err);
        } else {
                  res.json({success:'ok', message: `${req.body.title} been saved`})
        }
      })
}


function update_blogpost(req,res) {
  blogpost.blogpost.update({_id:req.params.blogpost_id},{
          blogpost_id : req.body.blogpost_id,
          author    : req.body.author,
          title     : req.body.title,
          body      : req.body.body,
          date      : req.body.date
      }, function (err) {
        if(err) {
          console.log(err)
        } else{
                  res.json({success:'ok', message: `${req.params.title} been updated`})
        }
      })
}
function delete_blogpost(req,res) {
  blogpost.blogpost.update({_id:req.params.blogpost_id}, function (err) {
    if(err) {
      console.log(err)
    } else {
      res.json({success:'ok', message: `${req.params.blogpost_id} been deleted`})
    }
      })
}

function find_blogpost(req,res,callback) {
  blogpost.blogpost.find({_id:req.params.blogpost_id},function (err,result) {
      if(err){
        console.log(err)
      } else {
        res.json(result)
      }
  })
}

function find_all_blogpost(req,res,callback) {
  blogpost.blogpost.find({},function (err,result) {
      if(err){
        console.log(err)
      } else {
        res.json(result)
      }
  })
}
module.exports = {
  insert_blogpost : insert_blogpost,
  update_blogpost: update_blogpost,
  delete_blogpost: delete_blogpost,
  find_blogpost : find_blogpost,
  find_all_blogpost: find_all_blogpost
}
