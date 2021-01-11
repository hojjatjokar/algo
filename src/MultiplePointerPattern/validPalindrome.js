/*
Valid Palindrome:
Given a string, determine if it is a palindrome, considering only alphanumeric
 characters and ignoring cases.
Note: For the purpose of this problem, we define empty string as valid palindrome.

- s consists only of printable ASCII characters.
*/
function isAlphanumeric(ch) {
  return /^[0-9a-zA-Z]+$/.test(ch);
}
function validPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < str.length) {
    if (!isAlphanumeric(str[left])) {
      left++;
      continue;
    }
    if (!isAlphanumeric(str[right])) {
      right--;
      continue;
    }
    if (str[left].toLowerCase() !== str[right].toLowerCase()) return false;
    left++;
    right--;
  }

  return true;
}

const example1 = 'A man, a plan, a canal: Panama';
console.log(validPalindrome(example1));
// true

const example2 = 'race a car';
console.log(validPalindrome(example2));
// false
