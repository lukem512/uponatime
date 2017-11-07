'use strict'

const assert = require('assert')
const uponatime = require('../index')

describe('[Once] upon a time', function() {
  describe('Spoken', function() {
    it('should return spoken adverbs', function() {
      assert.equal(uponatime(1), 'once');
      assert.equal(uponatime(2), 'twice');
      assert.equal(uponatime(3), '3 times');
      assert.equal(uponatime(3, {thrice: true}), 'thrice');
      assert.equal(uponatime(10), '10 times');
    })
    it('should return numeric times', function() {
      assert.equal(uponatime.times(1), '1 time');
      assert.equal(uponatime.times(2), '2 times');
      assert.equal(uponatime.times(3), '3 times');
      assert.equal(uponatime.times(10), '10 times');
    })
    it('should return capitalized spoken adverbs', function() {
      assert.equal(uponatime(1, {capitalize: true}), 'Once');
      assert.equal(uponatime(2, {capitalize: true}), 'Twice');
      assert.equal(uponatime(3, {capitalize: true}), '3 times');
      assert.equal(uponatime(3, {thrice: true, capitalize: true}), 'Thrice');
      assert.equal(uponatime(10, {capitalize: true}), '10 times');
    })
  })
})
