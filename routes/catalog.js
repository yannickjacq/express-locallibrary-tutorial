var express = require('express');
var router = express.Router();
var authorController = require('../controllers/authorController');
var catalogController = require('../controllers/catalogController');
var bookController = require('../controllers/bookController');

router.get('/', catalogController.catalogController);

router.get('/authors', authorController.getAuthors);

router.get('/author/:id', authorController.getAuthorbyId);

router.post('/author/create', authorController.postAuthor);

router.put('/author/:id/update', authorController.updateAuthor);

router.delete('/author/:id/delete', authorController.deleteAuthor);

router.get('/books', bookController.getBooks);

module.exports = router;