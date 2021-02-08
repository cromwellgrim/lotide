// middle-out function
/*
find number of items in array
then reduce array to middle one or two items 
return these two middle items of the array
*/

const middle = function(array) {
  let middleElements = [];
  if (array.length < 3) {
    return middleElements;
  }
    if (array.length % 2 === 0) {
      middleElements.push(array[(array.length / 2) - 1]);
      middleElements.push(array[array.length / 2]);
    } else {
      middleElements.push(array[Math.floor(array.length / 2)]);
    } return middleElements;
};

module.exports = middle;

// push that matches index + 1 into new array index minus 0.5, if it is 3 or more
// two for even and one for odd 