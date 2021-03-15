function bubbleSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let noSwaps = true;

    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        noSwaps = false;
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }

    if (noSwaps) break;
  }

  return arr;
}

console.log(bubbleSort([4, 3, 7, 1, 2, 9, 6, 5]));
