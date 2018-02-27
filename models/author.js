var mongoose = require('mongoose');
var dateUtils = require('../utils/dateUtils');

//Defin schema
var Schema = mongoose.Schema;

var authorSchema = new Schema({
    first_name : String,
    family_name: String,
    date_of_birth: Date,
    date_of_death: Date
})

authorSchema.virtual('name').get(function(){
   // return first_name + ' ' + family_name; // -> voir string literal
    return '${this.first_name} ${this.family_name}'
})

authorSchema.virtual('lifespan').get(function(){
    return dateUtils.lifespan(this.date_of_birth, this.date_of_death);
})

authorSchema.virtual('url').get(function(){
    return '/catalog/author/'+this._id;
})

module.exports = mongoose.model('authorModel', authorSchema);