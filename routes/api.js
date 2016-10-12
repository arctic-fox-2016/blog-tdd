var express = require('express');
var router = express.Router();
var author = require('../controller/author')
var blogpost = require('../controller/blogposts')
var comment = require('../controller/comments')

/* GET users listing. */
router.get('/author', author.find_all_author)
router.get('/author/:author_id', author.find_author)
router.put('/author/:author_id', author.update_author)
router.post('/author', author.insert_author)
router.delete('/author/:author_id', author.delete_author)

router.get('/blogpost', blogpost.find_all_blogpost)
router.get('/blogpost/:blogpost_id', blogpost.find_blogpost)
router.put('/blogpost/:blogpost_id', blogpost.update_blogpost)
router.post('/blogpost', blogpost.insert_blogpost)
router.delete('/blogpost/:blogpost_id', blogpost.delete_blogpost)

router.get('/comment', comment.find_all_comment)
router.get('/comment/:comment_id', comment.find_comment)
router.put('/comment/:comment_id', comment.update_comment)
router.post('/comment', comment.insert_comment)
router.delete('/comment/:comment_id', comment.delete_comment)

module.exports = router;
