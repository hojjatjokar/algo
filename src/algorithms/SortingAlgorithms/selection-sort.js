function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[j], arr[i]);
      if (arr[j] < arr[i]) {
        console.log('if');
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

export default selectionSort;
