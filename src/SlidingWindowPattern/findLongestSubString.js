/*
Write a function called findLongestSubstring, which accepts a string 
and returns the length of the longest substring with all distinct characters.
*/

function findLongestSubstring(str) {
  let longest = 0;
  let i = 0;
  let seen = {};

  for (let j = 0; j < str.length; j++) {
    let char = str[j];

    if (seen[char]) i = Math.max(i, seen[char]);
    longest = Math.max(longest, j - i + 1);
    seen[char] = j + 1;
  }

  return longest;
}

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
