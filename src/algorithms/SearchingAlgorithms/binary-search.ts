function search(
  arr: number[],
  target: number,
  left = 0,
  right = arr.length - 1
): number {
  const pivot = Math.floor((right + left) / 2);

  if (right < left) return -1;
  if (arr[pivot] === target) return pivot;

  if (target > arr[pivot]) {
    left = pivot + 1;
    return search(arr, target, left, right);
  }

  if (target < arr[pivot]) {
    right = pivot - 1;
    return search(arr, target, left, right);
  }
}

export default search;
