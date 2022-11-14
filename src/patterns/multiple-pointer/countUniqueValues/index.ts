const countUniqueValues = (arr: number[]): number => {
  if (arr.length === 0) return 0;
  let count = 1;

  let left = 0;
  let right = 1;

  while (arr.length > right) {
    if (arr[left] !== arr[right]) {
      left = right;
      count++;
    }

    right++;
  }

  return count;
};

export default countUniqueValues;
