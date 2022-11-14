const removeDuplicates = (arr: number[]): number[] => {
  if (arr.length < 2) return arr;

  let left = 0;
  let right = 1;
  const result = [arr[0]];

  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      result.push(arr[right]);
    }

    left = right;
    right++;
  }

  return result;
};

export default removeDuplicates;
