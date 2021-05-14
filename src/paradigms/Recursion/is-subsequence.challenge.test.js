import isSubsequence from './is-subsequence';

test('Check for subsequence of string word', () => {
  expect(isSubsequence('hello', 'hello world')).toBe(true);
});

test('Check for subsequence of string chars', () => {
  expect(isSubsequence('sing', 'sting')).toBe(true);
});

test('Check for subsequence not in order', () => {
  expect(isSubsequence('abc', 'acb')).toBe(false);
});
