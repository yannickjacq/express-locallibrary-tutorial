var expect = require('chai').expect
var dateUtils = require('../utils/dateUtils');
var moment = require('moment');

describe('dateUtils', () => {

    describe('dummy test', () => {
        
        it('should test that 2+1 = 3', () => {
        var a = 2 + 1;
        expect(a).to.equal(3);
        });
    });
        
    describe('tests de lifespan', () => {
        it('should return the difference, in years, between two dates', () => {
            var startDate, endDate;
            startDate = moment('1988-06-28');
            endDate = moment('2008-06-28');
            
            expect(dateUtils.lifespan(startDate, endDate)).to.equal(20);
        });
        
        it('should return the difference, in years, between a startDate and nothing (so now)', () => {
            var startDate, endDate;
            startDate = moment('1988-06-28');
            
            expect(dateUtils.lifespan(startDate, endDate)).to.equal(29);
        });

        it('should return the string \'inconnue\'when the startDate is undefined', () => {
            var startDate, endDate;
            
            expect(dateUtils.lifespan(startDate, endDate)).to.equal('inconnue');
        });

        it('should return the string \'inconnue\'when the startDate is not a date', () => {
            var startDate = 'toto', endDate;
            
            expect(dateUtils.lifespan(startDate, endDate)).to.equal('inconnue');
        });

    });

});