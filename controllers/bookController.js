var async = require('async');
var mongoose = require('mongoose');
var bookModel = require('../models/book');
var authorModel = require('../models/author')

exports.getBooks = function(req, res){
    
    bookModel.find()
    .populate('author')
    .exec(function(err, books){
        console.log(books);
        res.render('books', {books});
    });
}

exports.APIgetBooks = function(req, res){
    bookModel.find().exec(function(err, books){
        res.send({books});
    })
}