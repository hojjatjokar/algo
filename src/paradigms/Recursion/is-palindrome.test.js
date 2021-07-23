import isPalindrome from './isPalindrome';

test('Is Palindrome', () => {
  expect(isPalindrome('awesome')).toBe(false);
});

test('Is Palindrome', () => {
  expect(isPalindrome('foobar')).toBe(false);
});

test('Is Palindrome', () => {
  expect(isPalindrome('tacocat')).toBe(true);
});

test('Is Palindrome', () => {
  expect(isPalindrome('amanaplanacanalpanama')).toBe(true);
});

test('Is Palindrome', () => {
  expect(isPalindrome('amanaplanacanalpandemonium')).toBe(false);
});
