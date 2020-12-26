// twoSum([1,8,4,6,3])(6)

function twoSum(arr) {
  return function (n) {
    const targetMap = new Map();

    for (const value of arr) {
      const targetValue = targetMap.has(value) ? targetMap.get(value) + 1 : 1;
      targetMap.set(value, targetValue);
    }

    for (const value of arr) {
      const target = n - value;
      const count = Number(value === target);

      if (targetMap.has(target) && targetMap.get(target) > count) return true;
    }
    return false;
  };
}

console.log(twoSum([1, 8, 4, 6, 3])(3));
