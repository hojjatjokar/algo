/*
  Implement a function called countUniqueValues, 
  which accepts a sorted array, 
  and counts the unique values in the array. 
  There can be negative numbers in the array,
  but it will always be sorted.
*/

function countUniqueValues(arr) {
  if (!arr.length) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      arr[++i] = arr[j];
    }
  }

  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 5, 5, 5, 6, 6, 7])); // 7
console.log(countUniqueValues([2, 3, 3, 3, 6, 6, 6, 6])); // 3
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([-2, -1, -1, 0, 1])); //4
console.log(countUniqueValues([1, 2])); //2
console.log(countUniqueValues([1])); // 1
console.log(countUniqueValues([])); //0
