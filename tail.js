//function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  } return;
};

const tail = function(array) {
  return array.shift(0);
};

//testers
let test = ["Hi"];
tail(test);
assertEqual(test.length, 1);
console.log(test);

let result = ["yes", "no", "maybe so"];
tail(result);
assertEqual(result.length, 3);
console.log(result);