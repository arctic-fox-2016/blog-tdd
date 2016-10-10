'use strict'

var chai = require('chai'),
    should = chai.should(),
    expect = chai.expect

var App = require('server.js')

describe("Test Server", () => {
  it("should return something that we expected", () => {
    App.isEven(num).should.be.true
  })
  it("should return something that we expected part 2", () => {
      expect(App.isOdd(num)).to.be.false
  })
})
