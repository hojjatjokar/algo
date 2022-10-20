const twoSum = (array: number[], target: number): number[] | null => {
  const map = new Map();

  for (let i = 0; i < array.length; i++) {
    const lookup = Math.abs(target - array[i]);

    if (map.has(lookup)) return [map.get(lookup), i];

    map.set(array[i], i);
  }

  return null;
};

export default twoSum;
