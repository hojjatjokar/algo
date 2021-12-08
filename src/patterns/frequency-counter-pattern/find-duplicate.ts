function findDuplicate(arr: number[]): boolean {
  const map = new Map();

  for (const item of arr) {
    if (map.has(item)) return true;
    map.set(item, true);
  }

  return false;
}

export default findDuplicate;
