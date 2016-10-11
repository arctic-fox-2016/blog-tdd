'use strict'

var chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = chai.should(),
    expect = chai.expect

chai.use(chaiHttp)

describe('Test server', () => {
  var id
  it(': create record', function(done){
    chai.request('http://localhost:8000')
        .post('/api/posts')
        .send({
          title: 'Title 1',
          slug: 'title-1',
          content: 'Content 1',
          tag: 'post'
        })
        .end(function(err, res){
          expect(res).to.have.status(200)
          id = res.body._id;
          done()
        })
  })
  it(': read data', function(done){
    chai.request('http://localhost:8000')
        .get('/api/posts')
        .end(function(err, res){
          expect(res).to.have.status(200)
          done()
        })
  })
  it(': update record', function(done){
    chai.request('http://localhost:8000')
        .put(`/api/posts/${id}`)
        .end(function(err, res){
          expect(res).to.have.status(200)
          done()
        })
  })
  it(': delete record', function(done){
    chai.request('http://localhost:8000')
        .delete(`/api/posts/${id}`)
        .end(function(err, res){
          expect(res).to.have.status(200)
          done()
        })
  })
})
