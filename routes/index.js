var express = require('express');
var router = express.Router();
const contentController = require('../controllers/content')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*
================== Cards API ==================
*/
router.post('/content', contentController.insert)
router.get('/content', contentController.display)
router.put('/content/:id', contentController.update)
router.delete('/content/:id', contentController.hapus)
router.get('/content/:id', contentController.detail)



module.exports = router;
