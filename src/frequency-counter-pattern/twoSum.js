// https://leetcode.com/problems/two-sum/solution/
// https://web.stanford.edu/class/cs9/sample_probs/TwoSum.pdf

// Approach 1: Brute Force
function twoSumI(arr) {
  return (target) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (target === arr[i] + arr[j]) return true;
      }
    }

    return false;
  };
}

// Hash map two pass
function twoSumII(arr) {
  return function twoSumInner(target) {
    const map = new Map();

    for (const item of arr) {
      if (map.has(item)) map.set(item, map.get(item) + 1);
      else map.set(item, 1);
    }

    for (const item of arr) {
      const value = target - item;

      if (value !== item && map.has(value)) return true;
      if (value == item && map.get(item) > 1) return true;
    }

    return false;
  };
}

function twoSumIII(arr) {
  return function twoSumInner(target) {
    const map = new Map();

    for (const item of arr) {
      const value = target - item;

      if (map.has(value)) return true;

      map.set(item, 1);
    }

    return false;
  };
}

console.log(twoSumI([1, 8, 4, 6, 3])(3));
console.log(twoSumI([1, 8, 2, 6, 3])(3));
console.log(twoSumII([1, 8, 4, 6, 3])(3));
console.log(twoSumII([1, 8, 2, 6, 3])(3));
console.log(twoSumIII([1, 8, 4, 6, 3])(3));
console.log(twoSumIII([1, 8, 2, 6, 3])(3));
