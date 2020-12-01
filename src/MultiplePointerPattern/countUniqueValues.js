/*
  Implement a function called countUniqueValues, 
  which accepts a sorted array, 
  and counts the unique values in the array. 
  There can be negative numbers in the array,
  but it will always be sorted.
*/

/*
  countUniqueValues([1,1,1,2]) // 2
  countUniqueValues([1,2,3,4,5,5,5,6,6,7]) // 7
  countUniqueValues([2,3,3,3,6,6,6,6]) // 3
*/

function countUniqueValues(arr) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      arr[i] = arr[j];
      i++;
    }
  }

  return i;
}
