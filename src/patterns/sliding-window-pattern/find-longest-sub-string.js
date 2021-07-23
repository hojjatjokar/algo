function findLongestSubstring(str) {
  let start = 0;
  let end = 0;
  let chars = new Map();
  let count = 0;
  let max = 0;

  while (end < str.length) {
    if (!chars.has(str[end])) {
      chars.set(str[end], end);
      count++;
      if (count > max) max = count;
    } else {
      start = chars.get(str[end]) + 1;
      count = end - chars.get(str[end]);
    }
    end++;
  }
  return max;
}

export default findLongestSubstring;
