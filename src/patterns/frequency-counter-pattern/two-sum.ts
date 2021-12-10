function twoSum(arr: number[], target: number): number[] | null {
  const map = new Map();
  type Pair = [number, number];
  const arrr: IterableIterator<Pair> = arr.entries();

  for (const [key, item] of arrr) {
    const result = target - item;

    if (map.has(result)) return [map.get(result), key];
    map.set(item, key);
  }

  return null;
}

export default twoSum;
