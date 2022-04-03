const same = (firstNums: number[], secondNums: number[]): boolean => {
  if (firstNums.length !== secondNums.length) return false;

  const secondNumsMap = new Map();

  for (let num of secondNums) {
    if (secondNumsMap.has(num)) {
      secondNumsMap.set(num, secondNumsMap.get(num) + 1);
    } else {
      secondNumsMap.set(num, 1);
    }
  }

  for (let item of firstNums) {
    if (!secondNumsMap.get(item)) return false;
    secondNumsMap.set(item, secondNumsMap.get(item) + 1);
  }

  return true;
};

export default same;
