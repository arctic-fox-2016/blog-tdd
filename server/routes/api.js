const express = require('express')
const router = express.Router()
const Posts = require('../controllers/posts')

router.post('/posts', Posts.insert)
router.get('/posts', Posts.display)
router.put('/posts/:id', Posts.update)
router.delete('/posts/:id', Posts.hapus)
router.post('/posts/uploadImg', Posts.uploadImg)
