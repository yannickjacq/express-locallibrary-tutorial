
var moment = require('moment');

exports.lifespan = function(startDate, endDate){
    if(startDate){
        if (endDate){
            return moment.duration(endDate - startDate).years();
        }else{
            return moment.duration(Date.now() - startDate).years();
        }
    }else{
        return "Impossible de calculer l'age : pas de date de naissance"
    }
};