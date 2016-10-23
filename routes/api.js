var express = require('express');
var router = express.Router();
var author = require('../controller/author')
var blogpost = require('../controller/blogposts')
var comment = require('../controller/comments')
var question = require('../controller/question')
var user = require('../controller/user')

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

//question
router.get('/question', question.find_all_question)
router.get('/question/:question_id', question.find_question)
router.put('/question/:question_id', question.update_question)
router.post('/question/:question_id/upvotes/:user_id', question.questin_upvotes)
router.post('/question/:question_id/downvotes/:user_id', question.question_downvotes)
router.post('/question', question.insert_question)
router.delete('/question/:question_id', question.delete_question)

//answer
router.post('/question/:question_id/answer/:user_id', question.insert_answer)
router.post('/question/:question_id/answer/:user_id/upvotes', question.answer_upvotes)
router.post('/question/:question_id/answer/:user_id/downvotes', question.answer_downvotes)
router.post('/question/:question_id/answer/:user_id/update/:answer_num', question.update_answer)

//user
router.get('/user', user.find_all_user)
router.get('/user/:user_id', user.find_user)
router.put('/user/:user_id', user.update_user)
router.post('/user', user.insert_user)
router.delete('/user/:user_id', user.delete_user)

module.exports = router;
