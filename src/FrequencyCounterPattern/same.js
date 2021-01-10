/*
  Write a function called same,
  which accepts two arrays.
  The function should return true if every value in the array 
  has it's corresponding value squared in the second array.
  The frequency of values must be the same.
 */

function same(arr1, arr2) {
  const squaredCounter = {};

  arr2.forEach((value) => {
    squaredCounter[value] = squaredCounter[value]
      ? squaredCounter[value] + 1
      : 1;
  });

  arr1.forEach((value) => {
    const squared = value ** 2;
    if (squaredCounter[squared]) {
      squaredCounter[squared] = squaredCounter[squared] - 1;
    } else {
      return false;
    }
  });

  return true;
}

// Example 1
// inputs:
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 6, 8];
console.log(same(arr1, arr2));
// result: true
