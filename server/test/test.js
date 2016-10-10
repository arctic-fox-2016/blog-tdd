'use strict'
let mongoose = require('mongoose')
// let Content = require('../models/contents')

const chai = require('chai')
const should = chai.should()
const expect = chai.expect
const chaiHttp = require('chai-http')
const server = require('../server')

chai.use(chaiHttp)


describe('--- Test Contents ---', () => {
  // beforeEach((done) => { // Before each test we empty the database
  //   Content.remove({}, (err) => {
  //     done()
  //   })
  // })

  //----- Test the /GET routes -----
  describe('/GET All Contents', () => {
    it('It should GET all the contents', (done) => {
      chai.request(server)
        .get('/api/contents')
        .end((err, result) => {
          // console.log(result);
          result.should.have.status(200)
          result.body.should.be.a('array')
          result.body.length.should.be.eql(2)
        done()
        })
    })
  })

  //----- Test the /POST routes -----
  describe('/POST new content', () => {
    it('It should POST new contents', (done) => {
      let newContent = {
        author: 'david',
        title: 'test postingan',
        post: 'test isi posting apakah masuk?'
      }
      chai.request(server)
        .post('/api/contents')
        .send(newContent)
        .end((err, result) => {
          result.should.have.status(200)
          result.body.should.be.a('object')
          result.body.should.have.property('title').eql('test postingan')
        done()
        })
    })
  })

  

})


//const App = require('./index.js')

// describe('Test Server BLOG-TDD (Blog Content Management System)', () => {
//   it('--- Testing insert content berhasil', () => {
//     App.checkInsertContent().should.be.true
//     // get /api/articles
//     // expect json .....
//   })
//
//   it('--- Testing get content berhasil', () => {
//     App.checkGetContent().should.be.true
//   })
//
//   it('--- Testing delete content berhasil', () => {
//     App.checkDeleteContent().should.be.true
//   })
//
//   it('--- Testing update content berhasil', () => {
//     App.checkUpdateContent().should.be.true
//   })
// })
