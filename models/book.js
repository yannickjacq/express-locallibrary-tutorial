var mongoose = require('mongoose');

//Defin schema
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title : String,
    author : {type: Schema.ObjectId, ref: 'authorModel', required: true},
    summary : {type: String,required: true, min: 0},
    isbn : {type: String, required: true},
    genre : [{type: Schema.ObjectId, ref: 'genreModel'}]
    
})

bookSchema.virtual('url').get(function(){
    return '/catalog/book/'+this._id;
})

module.exports = mongoose.model('bookModel', bookSchema);