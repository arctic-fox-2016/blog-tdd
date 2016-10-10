' use strict'

var chai = require('chai'),
    expect = chai.expect,
    chaiHttp = require('chai-http');
var App = require('./index.js')
let server = require('../app');
var num
let mongoose = require("mongoose");
let Content = require('../models/content');

chai.should()
chai.use(chaiHttp);

var id

describe('====TEST CONTENT====', () => {
  describe('/GET content', () => {
      it('test GET dari isi content', (done) => {
        chai.request(server)
            .get('/content')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(1);
              done();
            });
      });
  });


  describe('/POST book', () => {
        it('test POST ke content', (done) => {
          let content = {
              judul: "Postingan 1",
              isi: "ini isi dari blog nya",
              hashtag: "hashtag"
          }
          chai.request(server)
              .post('/content')
              .send(content)
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('judul').eql('Postingan 1');
                  id = res.body.id
                  console.log(id);
                done();
              });
        });
    });

});




///////////////////
