var mongoose = require('mongoose');
var authorModel = require('../models/author');
var async = require('async');


exports.getAuthors = function(req, res){
    //res.send('Page de liste des auteurs');
    authorModel.find().exec(function(err, authors){
        res.render('authors', {authors});
    })
};
    
exports.APIgetAuthors = function(req, res){
    //res.send('Page de liste des auteurs');
    authorModel.find().exec(function(err, authors){
        res.send({authors});
    })
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
};