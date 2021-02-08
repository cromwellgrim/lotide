const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObject = function(object1, object2) {
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

module.exports = eqObject;

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

// // const ab = { a: "1", b: "2" };
// // const ba = { c: "2", a: "1", c: "5" };
// // console.log(eqObjects(ab, ba)); // => true



