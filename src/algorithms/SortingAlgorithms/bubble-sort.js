function bubbleSort(arr) {
  let j = arr.length;

  while (j) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
    j--;
  }

  return arr;
}

export default bubbleSort;
