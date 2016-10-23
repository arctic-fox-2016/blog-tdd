var  author =  require('../model/blogs')

function insert_author(req,res) {
  new author.author({
          first_name  : req.body.first_name,
          last_name   : req.body.last_name,
          phone       : req.body.phone,
          email       : req.body.email,
          address     : req.body.address
      })
      .save(function (err) {
        if(err) {
          console.log(err);
        } else {
          console.log(req.body.first_name)
                  res.json({success:'ok', message: `${req.body.first_name} been saved`})
        }
      })
}
// var authortest = new author.author({
//         first_name  : 'Sahbana',
//         last_name   : 'lubis',
//         phone       : '081266490034',
//         email       : 'sahbanalo@gmail.com',
//         address     : 'jl. Pudin Patal Senayan, Jakarta Selatan'
//     })
//     .save(function (err) {
//       console.log('1 object saved');
//     })

function update_author(req,res) {
  author.author.update({_id:req.params.author_id},{
          first_name  : req.body.first_name,
          last_name   : req.body.last_name,
          phone       : req.body.phone,
          email       : req.body.email,
          address     : req.body.address
      }, function (err) {
        if(err) {
          console.log(err)
        } else{
                  res.json({success:'ok', message: `${req.params.author_id} been updated`})
        }
      })
}
function delete_author(req,res) {
  author.author.update({_id:req.params.author_id}, function (err) {
    if(err) {
      console.log(err)
    } else {
      res.json({success:'ok', message: `${req.params.author_id} been deleted`})
    }
      })
}

function find_author(req,res) {
  author.author.find({_id:req.params.author_id},function (err,result) {
      if(err){
        console.log(err)
      } else {
        res.json(result)
      }
  })
}

function find_all_author(req,res) {
  author.author.find({},function (err,result) {
      if(err){
        console.log(err)
      } else {
        res.json(result)
      }
  })
}
module.exports = {
  insert_author : insert_author,
  update_author: update_author,
  delete_author: delete_author,
  find_author : find_author,
  find_all_author: find_all_author
}
