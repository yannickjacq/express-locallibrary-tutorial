var express = require('express');
var router = express.Router();
var authorController = require('../controllers/authorController');
var catalogController = require('../controllers/catalogController');
var bookController = require('../controllers/bookController');



router.get('/authors', authorController.APIgetAuthors);

module.exports = router;