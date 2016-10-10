'use strict'

var chai = require('chai'),
    expect = chai.expect,
    chaiHttp = require('chai-http');

chai.use(chaiHttp);

var sinon = require('sinon');
var expect = chai.expect;

var mongoose = require('mongoose');
require('sinon-mongoose');

//Importing our todo model for our unit testing.
// var Blogs = require('../models/blogs')


chai.should()

// beforeEach
// remove all documents in such collection

describe("Post Blogs", function() {

    // Test will pass if we get all todos
    it("should Post Blogs", function(done) {

        // insert some data
        chai.request('http://localhost:8080')
            .post('/api/blogs')
            .field('article', 'Hi')
            .field('contributor', 'h2123')
            .field('comments', 'Helo123')
            .end(function(err, result) {
                expect(result).to.have.status(200);
                done()
            })

    });
});


// Test will pass if the todo is saved
describe("Get Blog", function() {
    it("should return all the blogs", function(done) {

        chai.request('http://localhost:8080/api/blogs')
            .get('/')
            .end(function(err, res) {
                expect(res).to.be.json
                expect(res.body[0]).to.include.keys('article')
                expect(res.body[0]).to.include.keys('contributor')
                expect(res.body[0]).to.include.keys('comments')
                expect(res).to.have.status(200);
                done()
            })

    });

});
