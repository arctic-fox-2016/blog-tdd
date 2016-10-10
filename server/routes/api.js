//create new express router
var express = require('express')
var router = express.Router()
var blogsController = require('../controllers/blogs')

//export router

router.post('/blogs', blogsController.insert)
router.get('/blogs', blogsController.display)
router.put('/blogs/:id', blogsController.update)
router.delete('/blogs/:id', blogsController.deleteitem)

module.exports = router
