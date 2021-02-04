// assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  } return;
};

// countLetters function
const countLetters = function(allLetters) {
  // allLettes is every letter character (skip spaces somehow?)
  // lettersToCount is each letter we want the function to count up
  let results = {};
  for (let letter of allLetters) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  } return results;
};
console.log(countLetters('lighthouse labs'));
console.log(countLetters('jungle gym'));
console.log(countLetters('bonobo'));

const result1 = countLetters("leaves on the vine");
assertEqual(result1["l"], 1);
assertEqual(result1["n"], 2);