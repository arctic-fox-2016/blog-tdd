let mongoose = require('mongoose')
let Content = require('../models/contents')


function insert(req, res) {
  var newContent = new Content(req.body)

  newContent.save((err, content) => {
    if (err) {
      res.send(err)
    } else {
      res.json(content)
    }
  })

}

function display(req, res) {
  Content.find({}, (err, result) =>{
    if (err) res.send(err)
    res.json(result)
  })

}

function update(req, res) {
  Content.findById({_id: req.params.id}, (err, book) => {
    if (err) res.send(err)
    Object.assign(book, req.body).save((err, book) => {
      if(err) res.send(err)
      res.json({message: 'Contents updated', content})
    })
  })
}


function getContents(req, res) {
  Content.findById(req.params.id, (err, result) => {
    if (err) res.send(err)
    res.json(result)
  })
}

function hapus(req, res) {
  Content.remove({_id: req.params.id}, (err, result) => {
    res.json({message: 'Content successfully deleted!', result})
  })
}

// export all the functions
module.exports = { insert, display, update, hapus, getContents }
