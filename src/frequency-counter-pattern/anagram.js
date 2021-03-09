/* 
  Given two strings, write a function to determine 
  if the second string is an anagram of the first.
  An Anagram is a word, phrase, or name formed by rearranging 
  the letters of another, such as cinema, formed from iceman.
*/

function validAnagram(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  const lookup = {};

  for (let value of a) {
    lookup[value] = lookup[value] ? lookup[value] + 1 : 1;
  }

  for (let value of b) {
    if (lookup[value]) {
      lookup[value]--;
    } else {
      return false;
    }
  }

  return true;
}

// Example 1
// inputs:
let str1 = '';
let str2 = '';
console.log(validAnagram(str1, str2));
// result: true

// Example 2
// inputs:
let str1 = 'aaz';
let str2 = 'zza';
console.log(validAnagram(str1, str2));
// result: false

// Example 3
// inputs:
let str1 = 'anagram';
let str2 = 'nagaram';
console.log(validAnagram(str1, str2));
// result: true

console.log(validAnagram('rat', 'car')); // false) // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true
