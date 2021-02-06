// assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  } return;
};

// findKey function
const findKey = function(object, callback) {
  let allKeys = Object.keys(object);
  let finalKey;
  // console.log(object['Blue Hill']);
  // console.log(callback());
  for (k of allKeys) {
    // console.log(allKeys);
    // console.log(object[k]);
    // console.log(callback(object[k]))
    if (callback(object[k]) === true) {
      return finalKey = k;
    }
  }
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

// console.log(assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2)), noma);