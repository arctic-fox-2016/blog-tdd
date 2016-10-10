'use strict'

var chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = chai.should(),
    expect = chai.expect

var App = require('server.js')
chai.use(chaiHttp)

describe("Test Server", () => {
  it("should return something that we expected", () => {
    App.isEven(num).should.be.true
  })
  it("should return something that we expected part 2", () => {
      expect(App.isOdd(num)).to.be.false
  })
})
