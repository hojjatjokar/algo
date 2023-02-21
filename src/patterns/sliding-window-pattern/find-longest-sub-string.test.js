import findLongestSubstring from './find-longest-sub-string';

test('Accept string', () => {
  expect(findLongestSubstring('')).toBe(0);
});

test('Returns longest unique chars', () => {
  expect(findLongestSubstring('rithmschool')).toBe(7);
});

test('Returns longest unique chars 2', () => {
  expect(findLongestSubstring('thecatinthehat')).toBe(7);
});

test('Returns onlye unique chars', () => {
  expect(findLongestSubstring('bbbb')).toBe(1);
});

test('Counts based on uniquiesness in substring', () => {
  expect(findLongestSubstring('abcdaxyaz')).toBe(6);
});
