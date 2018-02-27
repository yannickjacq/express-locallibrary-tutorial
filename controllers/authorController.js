
exports.getAuthors = function(req, res){
    //res.send('Page de liste des auteurs');
    res.render('getAuthors', { title: 'Tous les auteurs' });
};

exports.getAuthorbyId = function(req, res){
    console.log(req.params);
    res.send('Page de consultation d\'un auteur par Id. Id : ' + req.params.id);
};

exports.postAuthor = function(req, res){
    console.log(req.body);
    res.send('Page de création d\'un nouvel auteur. Auteur : ');
}

exports.updateAuthor = function(req, res){
    res.send('Page de mise à jour d\'un auteur. Auteur : ' + req.params.id);
}

exports.deleteAuthor = function(req, res){
    res.send('page de suppression d\'un auteur. Auteur : ' + req.params.id);
}