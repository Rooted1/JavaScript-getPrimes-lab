'use strict'

var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

var myApp = require('../app/prime.js');

describe("getPrimes tests ", function() {
 
  it("should return [2, 3, 5, 7] for number 10", function() {
    assert.deepEqual(myApp.getPrimes(10), [2, 3, 5,7]);
  });

  it("should return [ 2, 3, 5, 7, 11, 13, 17, 19 ] for number 20", function() {
    assert.deepEqual(myApp.getPrimes(20), [ 2, 3, 5, 7, 11, 13, 17, 19 ]);
  });

  it("should return [ 2, 3, 5, 7, 11, 13 ] for number 15", function() {
    assert.deepEqual(myApp.getPrimes(15), [ 2, 3, 5, 7, 11, 13 ]);
  });

  it("should return 'undefined' if n is not a number", function() {
    assert.deepEqual(myApp.getPrimes("ten"), 'undefined');
  });

  it("should return [ 2, 3, 5 ] for number 6", function() {
    assert.deepEqual(myApp.getPrimes(6), [ 2, 3, 5 ]);
  });

  it("should return 'undefined' for no input ", function() {
    assert.deepEqual(myApp.getPrimes(), 'undefined');
  });
  it("should return 'undefined' for number less than 1 ", function() {
    assert.deepEqual(myApp.getPrimes(-3), 'undefined');
  });
});