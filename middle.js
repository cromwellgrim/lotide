// assertArraysEqual Function
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

// eqArrays.js function
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

// middle-out function
/*
find number of items in array
then reduce array to middle one or two items 
return these two middle items of the array
*/

// const middle = function(array) {
//   let middleElement = '';
//   if ((array.length / 2) <= 1) {
//     return '';
//   } else if (array.length % 2 === 0) {
//     return middleElement.push
//   }
//   middleElement = array.length / 2;
//   if (Number.isInteger(middleElement) === true) {
//       console.log(middleElement);
//   }
// };

const middle = function(array) {
  let middleElements = [];
  if (array.length < 3) {
    return middleElements;
  }
    if (array.length % 2 === 0) {
      middleElements.push(array[(array.length / 2) - 1]);
      middleElements.push(array[array.length / 2]);
    } else {
      middleElements.push(array[Math.floor(array.length / 2)]);
    } return middleElements;
};


// push that matches index + 1 into new array index minus 0.5, if it is 3 or more
// two for even and one for odd 

// test code
console.log(middle([1])); // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]