const mocha = require('mocha')
const assert = require('assert')
const Web3 = require('web3')
const Compound = require('../src/index')
const provider = new Web3.providers.HttpProvider('https://rospten.infura.io/v3/12e074bab6f544e9b8ec863009830ef3')
const web3 = new Web3(provider)
describe('Test compoundjs', () => {
  it('Test getPrice', done => {
    const compound = new Compound(provider)
    console.log(compound)
    done()
  })
})
