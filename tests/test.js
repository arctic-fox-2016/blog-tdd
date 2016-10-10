' use strict'

var chai = require('chai'),
    expect = chai.expect
var App = require('./index.js')
chai.should()
var num1,num2


describe("Test Blog Management System\n",()=> {
  beforeEach(function(){
    num = 1
  })
  it("======Testing insert content berhasil",()=>{
    App.cekInsert(num).should.be.true
  })
  it("======Testing read content berhasil",()=>{
    App.cekRead(num).should.be.true
  })
  it("======Testing update content berhasil",()=>{
    App.cekUpdate(num).should.be.true
  })
  it("======Testing hapus content berhasil",()=>{
    App.cekDelete(num).should.be.true
  })
})
