var mongoose = require('mongoose');

//Defin schema
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title : String,
    author : authorSchema,
    summary : String,
    
})