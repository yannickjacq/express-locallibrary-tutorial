var mongoose = require('mongoose');
var bookModel = require('../models/book');
var authorModel = require('../models/author');
var bookInstanceModel = require('../models/bookinstance');
var genreModel = require('../models/genre');
var async = require('async');

exports.catalogController = function(req, res){

    var bookCount, copies, availableCopies, authorCount, genreCount;

    async.parallel([
        function (callback){
            bookCount = bookModel.count(callback)
        },
        function (callback){
            copies = bookInstanceModel.count(callback);
        },
        function (callback){
            availableCopies = bookInstanceMode.count({status: 'Available'}, callback);
        },
        function (callback){
            authorCount = authorModel.count(callback);
        },
        function (callback){
            genreCount = genreModel.count(callback);
        }   
    ], 
)
    // bookCount = bookModel.count({}, );
    // copies = bookInstanceModel.count({}, );
    // availableCopies = bookInstanceMode.count({status: 'Available'},);
    // authorCount = authorModel.count({}, );
    // genreCount = genreModel.count({}, );
};