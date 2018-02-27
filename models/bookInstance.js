var mongoose = require('mongoose');

//Defin schema
var Schema = mongoose.Schema;

var bookinstanceSchema = new Schema({
    book : {type: Schema.ObjectId, ref: 'bookModel'},
    imprint : String,
    status : {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved', 'Mint'], default: 'Mint'},
    due_back : Date
})

bookinstanceSchema.virtual('url').get(function(){
    return '/catalog/bookinstance/'+this._id;
})

module.exports = mongoose.model('bookinstanceModel', bookinstanceSchema);