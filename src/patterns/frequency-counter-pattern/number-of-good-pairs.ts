function numberOfGoodPairs(arr: number[]): number {
  if (arr.length < 2) return 0;
  let result = 0;
  const map = new Map();

  for (const item of arr) {
    if (map.has(item)) {
      result += map.get(item);
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }

  return result;
}

export default numberOfGoodPairs;
