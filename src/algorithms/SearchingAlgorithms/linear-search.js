function search(arr, target) {
  const entries = arr.entries();

  for (const [key, item] of entries) {
    if (item === target) return key;
  }

  return -1;
}

export default search;
