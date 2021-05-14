import { validationMessages } from '../../utils/strings';

function maxSubarraySum(arr, num) {
  let left = 0;
  let right = num > 1 ? num - 1 : 0;
  let max = 0;
  let sum = 0;

  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }

  while (right < arr.length) {
    right++;

    sum = sum + arr[right] - arr[left];
    if (sum > max) max = sum;

    left++;
  }

  return max;
}

export default maxSubarraySum;
