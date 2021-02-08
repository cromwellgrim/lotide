// without function
const without = function(source, itemsToRemove) {
  let sourceCopy = [...source];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
      sourceCopy.splice(i, 1,);
    } 
  }
} console.log(sourceCopy);
};

module.exports = without;
// // test code for without function
// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

// // test code for without + assertEqual function
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);