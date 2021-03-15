/*
Write a function called minSubArrayLen which accepts two parameters - an array
of positive integers and a positive integer. This function should return the 
minimal length of a contiguous subarray of which the sum is greater than or 
equal to the integer passed to the function. If there isn’t one, return 0 instead.
*/

function minSubArrayLen(arr, num) {
  let result = Infinity;
  let count = 1;
  let sum = arr[0];

  let i = 0;
  let j = 0;

  while (j < arr.length) {
    if (sum >= num) {
      sum -= arr[i];
      i++;
      count--;
    } else {
      j++;
      count++;
      sum += arr[j];
    }

    if (sum >= num && count < result) {
      result = count;
    }
  }

  return result !== Infinity ? result : 0;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4, 3] is the smallest subarray
//console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5, 4] is the smallest subarray
//console.log(minSubArrayLen([3, 1, 62, 19], 52)); // 1 -> because [62] is greater than 52
