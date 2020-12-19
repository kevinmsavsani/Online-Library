var express = require('express');
var router = express.Router();

var book_controller = require('../controllers/bookController.js');

// GET home page.
router.get('/booklist', book_controller.booklist);


module.exports = router;