function quickSort(arr) {
  if (arr.length < 2) return arr;
  const pivot = 0;

  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[pivot]) left.push(arr[i]);
    if (arr[i] > arr[pivot]) right.push(arr[i]);
  }

  return [...quickSort(left), arr[pivot], ...quickSort(right)];
}

export default quickSort;
