var  author =  require('./model/blogs')

function insert_author(req,res,callback) {
  new author.author({
          first_name  : req.body.first_name,
          last_name   : req.body.last_name,
          phone       : req.body.phone,
          email       : req.body.email,
          address     : req.body.address
      })
      .save(function (err) {
        if(err) console.log(err);
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

function update_author(req,res,callback) {
  author.author.update({_id:req.params.author_id},{
          first_name  : req.body.first_name,
          last_name   : req.body.last_name,
          phone       : req.body.phone,
          email       : req.body.email,
          address     : req.body.address
      }, function (err) {
        if(err) console.log(err)
      })
}
function delete_author(req,res,callback) {
  author.author.update({_id:req.params.author_id}, function (err) {
        if(err) console.log(err)
      })
}

function find_author(req,res,callback) {
  author.author.find({_id:req.params.author_id},function (err,result) {
      if(err){
        console.log(err)
      } else {
        return result
      }
  })
}

function find_all_author(req,res,callback) {
  author.author.find({},function (err,result) {
      if(err){
        console.log(err)
      } else {
        return result
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
