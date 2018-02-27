
var moment = require('moment');

exports.lifespan = function(startDate, endDate){
    return moment.duration(endDate - startDate).years();
};