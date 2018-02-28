var mongoose = require('mongoose');
var bookModel = require('../models/book');
var authorModel = require('../models/author');
var bookInstanceModel = require('../models/bookinstance');
var genreModel = require('../models/genre');
var async = require('async');

exports.catalogController = function(req, res){

    var bookCount, copies, availableCopies, authorCount, genreCount;

    async.parallel({
        bookCount : function (callback){
            //bookCount = bookModel.count(callback)
            bookModel.count(callback)
        },
        copies : function (callback){
            bookInstanceModel.count(callback);
        },
        availableCopies : function (callback){
            bookInstanceModel.count({status: 'Available'}, callback);
        },
        authorCount : function (callback){
            authorModel.count(callback);
        },
        genreCount : function (callback){
            genreModel.count(callback);
        }   
    }, function(err, results) {
        console.log(results);
        res.render('catalog', {results})
    });
    // bookCount = bookModel.count({}, );
    // copies = bookInstanceModel.count({}, );
    // availableCopies = bookInstanceMode.count({status: 'Available'},);
    // authorCount = authorModel.count({}, );
    // genreCount = genreModel.count({}, );
};