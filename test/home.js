' use strict'

var chai = require('chai'),
    expect = chai.expect,
    chaiHttp = require('chai-http')
let server = require('../app')

chai.should()
chai.use(chaiHttp);


describe('Test Homepage', function () {
    it('should return respond ok(200)', function (done) {
        chai.request(server)
            .get('/')
            .end(function (err, res) {
                res.should.have.status(200)
                done();
            })
    })
    it('should have form registrations with id ContactForm1_contact-form-name', function (done) {
        chai.request(server)
            .get('/')
            .end(function (err, res) {
                expect(res.text).to.have.string('ContactForm1_contact-form-name')
                done();
            })
    })

    it('should have navbar with class nav nav-justified mat-tabs', function (done) {
        chai.request(server)
            .get('/')
            .end(function (err, res) {
                expect(res.text).to.have.string('nav nav-justified mat-tabs')
                done();
            })
    })
})
