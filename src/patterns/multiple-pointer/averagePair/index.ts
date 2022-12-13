function averagePair(arr: number[], target: number): boolean {
  if (arr.length < 2) return false;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    const average = sum / 2;

    if (average === target) return true;
    if (average < target) left++;
    if (average > target) right--;
  }

  return false;
}

export default averagePair;
