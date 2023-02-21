function findLongestSubstring(str: string): number {
  let longest = 0;
  let start = 0;
  let end = 0;
  const hashMap: { [key: string]: number } = {};
  let currentlength = 0;

  while (end < str.length) {
    if (!hashMap.hasOwnProperty(str[end]) || hashMap[str[end]] < start) {
      currentlength++;
      hashMap[str[end]] = end;
      if (currentlength > longest) longest = currentlength;
    } else {
      start = hashMap[str[end]] + 1;
      hashMap[str[end]] = end;
      currentlength = end - start + 1;
    }

    end++;
  }

  return longest;
}

export default findLongestSubstring;
