function insertionSort(arr: number[]): number[] {
  if (arr.length <= 2) return arr;

  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
    }
  }

  return arr;
}

export default insertionSort;
