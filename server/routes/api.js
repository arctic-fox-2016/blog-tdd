const express = require('express')
const router = express.Router()
const contentsController = require('../controllers/contents')
const userController = require('../controllers/users')


// router.get('/', (req, rest, next) => {
//   res.render('home.ejs')
// })

// ------- Contents API -------
router.post('/contents', contentsController.insert)
router.get('/contents', contentsController.display)
router.put('/contents/:id', contentsController.update)
router.delete('/contents/:id', contentsController.hapus)
router.get('/contents/:id', contentsController.getContents)

module.exports = router
