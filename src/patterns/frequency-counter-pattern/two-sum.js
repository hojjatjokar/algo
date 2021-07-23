function twoSum(arr, target) {
  const map = new Map();
  const arrr = arr.entries();

  for (const [key, item] of arrr) {
    const result = target - item;

    if (map.has(result)) return [map.get(result), key];
    map.set(item, key);
  }

  return null;
}

export default twoSum;
