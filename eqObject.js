// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

// const ab = { a: "1", b: "2" };
// const ba = { c: "2", a: "1", c: "5" };
// console.log(eqObjects(ab, ba)); // => true


// const printItems = function(array) {
//   for (let item of array) {
//     if (Array.isArray(item)) {
//       printItems(item);
//     } else {
//     console.log(item);
//     }
//   }
// }


// eqArrays function
// const eqArrays = function(array1, array2) {
//   if (array1.length === array2.length) {
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i]) {
//         return false;
//       }
//     }
//   } else {
//     return false;
//   } return true;
// };


// assertArraysEqual
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

// assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  } return;
};
