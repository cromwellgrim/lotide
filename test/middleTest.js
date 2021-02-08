const middle = require('../middle.js');
const assert = require('chai').assert;

describe('#middle', () => {

  it("should return [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("should return [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  
  it("should return [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2 ,3]), [2]);
  });

  it("should return [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

})
// // test code
// console.log(middle([1])); // => []
// console.log(assertArraysEqual(middle([1]), [])); // => []

// console.log(middle([1, 2])); // => []
// console.log(assertArraysEqual(middle([1, 2]), [])); // => []

// console.log(assertArraysEqual(middle([1, 2, 3]), [2])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]

// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));