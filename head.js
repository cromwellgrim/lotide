//function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  } return
};

const head = function(array) {
  return array[0];

}


//test code
assertEqual("Lighthouse Labs", "Boot Camp");
assertEqual("Boon", "Boon");
assertEqual(1, 1);
assertEqual(2, 3);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");