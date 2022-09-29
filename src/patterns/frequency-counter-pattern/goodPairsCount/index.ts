const goodPairsCount = (nums: number[]) => {
  if (nums.length <= 1) return 0;

  const hashMap: { [key: string]: number } = {};
  let result = 0;

  for (let num of nums) {
    if (hashMap[num]) {
      result += hashMap[num];
      hashMap[num] += 1;
    } else {
      hashMap[num] = 1;
    }
  }

  return result;
};

export default goodPairsCount;
