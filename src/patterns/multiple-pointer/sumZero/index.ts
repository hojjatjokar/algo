const sumZero = (arr: number[]): number[] | void => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const diff = arr[right] + arr[left];

    if (diff === 0) return [arr[left], arr[right]];
    if (diff > 0) right--;
    if (diff < 0) left++;
  }
};

export default sumZero;
