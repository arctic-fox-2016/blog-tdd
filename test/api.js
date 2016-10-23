' use strict'

var chai = require('chai'),
    expect = chai.expect,
    chaiHttp = require('chai-http')
var server = require('../app')
var mongoose = require("mongoose");
var Blogs = require('../model/blogs');

chai.should()
chai.use(chaiHttp);


describe('Test User Api', function () {
    it('GET localhost:3000/api/user should return all users', function (done) {
        chai.request(server)
            .get('/api/user')
            .end(function (err, res) {
                res.should.have.status(200)

                done();
            })
    })
    it('GET localhost:3000/api/user should return all users', function (done) {
        chai.request(server)
            .get('/api/user')
            .end(function (err, res) {
                res.should.have.status(200)
                chai.request(server)
                    .get(`/api/user/${res.body[0]._id}`)
                    .end(function (err2, res2) {
                        expect(res2.body[0]).to.have.proverty('_id')
                        expect(res2.body[0]).to.have.proverty('first_name')
                        expect(res2.body[0]).to.have.proverty('last_name')
                        expect(res2.body[0]).to.have.proverty('email')
                        expect(res2.body[0]).to.have.proverty('phone')
                        expect(res2.body[0]).to.have.proverty('address')
                        res2.body[0]._id.should.equal(res.body[0]._id)
                        res2.body[0]._id.first_name.equal("sahbana")
                        res2.body[0]._id.last_name.equal("lubis")
                        res2.body[0]._id.phone.equal("081266490034")
                        res2.body[0]._id.email.equal("sahbanalo@gmail.com")
                        res2.body[0]._id.address.equal("jl. pudin patal senayan, jakarta selatan")

                    })
                done();
            })
    })


    // it('GET localhost:3000/api/users/:id should return one user', function (done) {
    //     chai.request(server)
    //         .get('/api/users')
    //         .end(function (err, res) {
    //             res.should.have.status(200)
    //             done();
    //         })
    // })
    // it('POST localhost:3000/api/users should insert a user', function (done) {
    //     chai.request(server)
    //         .get('/')
    //         .end(function (err, res) {
    //             expect(res.text).to.have.string('ContactForm1_contact-form-name')
    //             done();
    //         })
    // })
    //
    // it('PUT localhost:3000/api/users/:id should update user with given id', function (done) {
    //     chai.request(server)
    //         .get('/')
    //         .end(function (err, res) {
    //             expect(res.text).to.have.string('nav nav-justified mat-tabs')
    //             done();
    //         })
    // })
    // it('DELETE localhost:3000/api/users/:id should delete a user with given id', function (done) {
    //     chai.request(server)
    //         .get('/')
    //         .end(function (err, res) {
    //             expect(res.text).to.have.string('nav nav-justified mat-tabs')
    //             done();
    //         })
    // })
})
