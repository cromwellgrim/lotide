const mapped = function(array, callback) {
  const results = [];
  for (let item of array) {
  results.push(callback(item));
  };

  return results;
};

module.exports = mapped;
// const results1 = mapped(words, word => word[0]);
// console.log(results1);

// console.log(assertArraysEqual(words, results1));