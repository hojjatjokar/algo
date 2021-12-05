function minSubArrayLen(arr: number[], num: number): number {
  let i = 0;
  let j = 0;
  let result = 0;
  let minLen = 0;
  let current = arr[i];

  while (j <= arr.length) {
    if (current >= num) {
      if (!result || current <= result) {
        result = current;
        minLen = j - i + 1 < minLen || !minLen ? j - i + 1 : minLen;
      }

      current -= arr[i];
      i++;
    } else {
      j++;
      if (arr[j]) current += arr[j];
    }
  }
  return minLen;
}

export default minSubArrayLen;
