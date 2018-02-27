var express = require('express');
var router = express.Router();
var authorController = require('../controllers/authorController');

router.get('/', function(req, res, next) {
    res.send('Page d\'accueil du catalogue');
});

router.get('/authors', authorController.getAuthors);

router.get('/author/:id', authorController.getAuthorbyId);

router.post('/author/create', authorController.postAuthor);

router.put('/author/:id/update', authorController.updateAuthor);

router.delete('/author/:id/delete', authorController.deleteAuthor);

module.exports = router;