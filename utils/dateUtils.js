
var moment = require('moment');

exports.lifespan = function(date_min, date_max){
    return moment(date_min).diff(date_max, year);
}