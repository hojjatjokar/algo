import validPalindrome from "./valid-palindrome"

test('Check a string contains a non alphanumeric character ', () => {
  expect(validPalindrome('A man, a plan, a canal: Panama')).toBe(true);
});

test('Check for non palindrome', () => {
  expect(validPalindrome('race a car')).toBe(false);
});
