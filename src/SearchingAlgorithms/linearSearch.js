function search(arr, target) {
  if (arr.length === 0) return;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }

  return -1;
}
