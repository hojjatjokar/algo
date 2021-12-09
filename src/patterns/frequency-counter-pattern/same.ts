function same(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) return false;

  const squaredCounter = new Map();

  for (const item of arr2) {
    if (squaredCounter.has(item))
      squaredCounter.set(item, squaredCounter.get(item) + 1);
    else squaredCounter.set(item, 1);
  }

  for (const item of arr1) {
    const squared = item ** 2;
    if (!squaredCounter.has(squared)) return false;

    if (squaredCounter.get(squared) > 0)
      squaredCounter.set(squared, squaredCounter.get(squared) - 1);
    else return false;
  }

  return true;
}

export default same;
