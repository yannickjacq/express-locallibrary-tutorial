var mongoose = require('mongoose');
var Book = require('../models/book');

var should = require('chai').should
var chai = require('chai');
var chaiHttp = require('chai-http');

process.env.NODE_ENV = 'test';
var server = require('../app');


chai.use(chaiHttp);



describe('Books', () => {
    beforeEach((done) => {
        console.log("Base flush");
        Book.remove({}, (err) => {
            done();
        });
    })

    describe ('/GET book', () => {
        it('should return an empty array of books ', () => {

            chai.request(server)
            .get('/api/books')
            .end(function(err, res){
                expect(res).to.be.a('array').with.lengthOf(0);
            })
        });
    })
})