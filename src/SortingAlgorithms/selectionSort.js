function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (i !== min) {
      const temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([3, 15, 7, 12, 16]));
