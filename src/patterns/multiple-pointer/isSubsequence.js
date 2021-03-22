// Write a function called isSubsequence which takes in two strings
// and checks whether the characters in the first string form
// a subsequence of the characters in the second string.
// In other words, the function should check whether the characters
// in the first string appear somewhere in the second string,
// without their order changing.

// multi pointer
function isSubsequenceI(str1, str2) {
  let i = 0;
  let j = 0;

  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }
  return i !== str1.length - 1;
}

// Recursive
function isSubsequenceII(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;

  if (str1[0] === str2[0]) {
    return isSubsequenceII(str1.slice(1), str2.slice(1));
  } else {
    return isSubsequenceII(str1, str2.slice(1));
  }
}

console.log(isSubsequenceI('hello', 'hello world')); // true
console.log(isSubsequenceI('sing', 'sting')); // true
console.log(isSubsequenceI('abc', 'acb')); // false (order matters)
console.log(isSubsequenceII('hello', 'hello world')); // true
console.log(isSubsequenceII('sing', 'sting')); // true
console.log(isSubsequenceII('abc', 'acb')); // false (order matters)
