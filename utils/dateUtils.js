
var moment = require('moment');

/**
 * Calcul de la différence en année entre deux dates, donc l'age d'une personne
 * @param {*} startDate la date de début de la période
 * @param {*} endDate la date de fin de la période
 * @return un nombre d'année
 */
exports.lifespan = function(startDate, endDate){
    if(startDate){  //Si la date de début existe il est possible de calculer une durée
        if (endDate){   //Si une date de fin existe (date de mort), on calcule la durée entre ces deux dates
            return moment.duration(endDate - startDate).years();
        }else{  //Si il n'y a pas de date de fin, on calcul la durée entre la date de début et la date d'aujourd'hui
            return moment.duration(Date.now() - startDate).years();
        }
    }else{  //Pas de date de début : impossible de claculer une durée
        return "inconnue"
    }
};

/**
 * Formatage d'une date en jj/mm/aaaa
 * @param {*} date objet Date à formater
 * @return une chaine de caractère
 */
exports.formatedDate = function(date){
    if(date){   //Si la date existe on la formate
        return  moment(date).format('DD/MM/YYYY');
    }else{  //Si elle n'existe pas on renvoie 'inconnue'
        return 'inconnue';
    }
}
