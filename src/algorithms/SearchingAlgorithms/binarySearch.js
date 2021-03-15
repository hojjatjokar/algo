function search(arr, target) {
  if (arr.length === 0) return;

  if (arr.length === 1 && arr[0] !== target) {
    return;
  }

  const middleIndex = Math.floor(arr.length / 2);

  if (arr[middleIndex] === target) {
    return middleIndex;
  } else if (arr[middleIndex] > target) {
    return search(arr.slice(0, middleIndex), 2);
  } else {
    return search(arr.slice(middleIndex), 2);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));
