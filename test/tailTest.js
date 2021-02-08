const tail = require('../tail.js');
const assertEqual = require('../assertEqual.js');

// tail testers
let test = ["Hi"];
tail(test);
assertEqual(test.length, 1);
console.log(test);

let result = ["yes", "no", "maybe so"];
tail(result);
assertEqual(result.length, 3);
console.log(result);