const eqArrays = require('./eqArrays.js');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`🟢 Assertion Passed: ${array1} === ${array2}`);
    return true;
  } else {
    console.log(`🔴 Assertion Failed: ${array1} !== ${array2}`);
    return false;
  }
};

// old version of assertArraysEqual
// const assertArraysEqual = function(array1, array2) {
//   if (array1.length === array2.length) {
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i]) {
//         console.log(`🔴 Assertion Failed: ${array1} !== ${array2}`);
//         return false;
//       }
//     }
//   } else {
//     console.log(`🔴 Assertion Failed: ${array1} !== ${array2}`);
//     return false;
//   }
//   console.log(`🟢 Assertion Passed: ${array1} === ${array2}`);
//   return true;
// };


module.exports = assertArraysEqual;
