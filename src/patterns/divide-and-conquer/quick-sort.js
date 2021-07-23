function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function getPivot(arr, left, right) {
  const pivot = Math.floor((left + right) / 2);

  while (left < right) {
    while (arr[left] < arr[pivot]) left++;
    while (arr[right] > arr[pivot]) right--;

    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  return left;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  const pivot = getPivot(arr, left, right);

  if (left < pivot - 1) quickSort(arr, left, pivot - 1);
  if (right > pivot) quickSort(arr, pivot, right);

  return arr;
}

export default quickSort;
