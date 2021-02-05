const letterPositions = function (words) {
  const results = {};
  //iterating? use a for (i = 0 ) loop 
  for (let i = 0; i < words.length; i++) {
    const letter = words[i];
    let letterIndex = words.indexOf(letter);
    if (results[letterIndex]) {
      results[letterIndex] += [i];
    } else {
      results[letterIndex] = [i];
    }
  }

  return results;
};

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


assertArraysEqual(letterPositions("hello").e, [1]);
