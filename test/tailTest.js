const tail = require('../tail.js');
const assert = require('chai').assert;

describe('#tail', () => {
  
  it("should return [] for ['Hi']", () => {
    assert.deepEqual(tail(['Hi']), []);
  });

  it("should return 'no', 'maybe so'", () => {
    assert.deepEqual(tail(['yes', 'no', 'maybe so']), ['no', 'maybe so']);
  });

});