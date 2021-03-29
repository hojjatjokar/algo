/*
  Write a function called maxSubarraySum 
  which accepts an array of integers and a number called n. 
  The function should calculate the maximum sum of n consecutive elements
  in the array.
*/

function maxSubarraySum(arr, num) {
  let start = 0;
  let max = 0;

  for (let i = 0; i < num; i++) {
    max += arr[i];
  }

  let temp = max;

  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[start] + arr[i];

    if (temp > max) {
      max = temp;
    }

    start++;
  }

  return max;
}

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
maxSubarraySum([4, 2, 1, 6], 1); // 6
maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
maxSubarraySum([], 4); // null
