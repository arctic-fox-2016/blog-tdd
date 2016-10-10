const express = require('express')
const router = express.Router()
const Posts = require('../controllers/posts')

router.post('/posts', Posts.create)
router.get('/posts', Posts.read)
router.put('/posts/:id', Posts.update)
router.delete('/posts/:id', Posts.delete)

module.exports = router
