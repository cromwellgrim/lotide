const eqObject = require('./eqObject')

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  let objectsEqual;
  if (eqObject(actual, expected)) {
  console.log(`🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  return true;
  } else {
    console.log(`🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
        return false;
  }
};

module.exports = assertObjectsEqual;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(assertObjectsEqual(ab, ba)); // => true

