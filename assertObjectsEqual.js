// eqArrays comes with eqObjects because it calls on it
const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
  } return true;
};

// eqObjects from the previous exercise
const eqObjects = function(object1, object2) {
  let returnValue = false;
  let key;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    // checks that they are the same length to start
    for (key in object1) {
      // going through the index of the object searching for keys
      const firstValue = object1[key];
      // saving the value found at each object1 key
      if (key in object2) {
        const secondValue = object2[key];
        // saving the value found at each object2 key
        if (Array.isArray(firstValue) && Array.isArray(secondValue)) {
          returnValue = eqArrays(firstValue, secondValue);
        } else if (firstValue === secondValue) {
          // comparing those saved values
          returnValue = true;
        } else {
          returnValue = false;
        }
      } else {
        returnValue = false;
      }
    }
  };
  return returnValue
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  let objectsEqual;
  if (eqObjects(actual, expected)) {
  console.log(`🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  return true;
  } else {
    console.log(`🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
        return false;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true


const assertArraysEqual = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        console.log(`🔴 Assertion Failed: ${array1} !== ${array2}`);
        return false;
      }
    }
  } else {
    console.log(`🔴 Assertion Failed: ${array1} !== ${array2}`);
    return false;
  }
  console.log(`🟢 Assertion Passed: ${array1} === ${array2}`);
  return true;
};
