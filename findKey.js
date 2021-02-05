const findKey = function(object, callback) {
  let values = value[object];
  let keys = key[object];
  for (key of keys) {
    if (values === callback()) {
      console.log(key); 
    }
  } return key;
  // when value[key] is equal to the callback function
  // return the foundKey 
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"