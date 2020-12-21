var express = require('express');
var router = express.Router();

var book_controller = require('../controllers/bookController.js');

// GET home page.
router.get('/booklist', book_controller.booklist);
router.get('/bookDetail', book_controller.bookDetail)

module.exports = router;