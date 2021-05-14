import validAnagram from './anagram';

test('Empty strings are anagram', () => {
  expect(validAnagram('', '')).toBe(true);
});

test('Different length strings are not anagram', () => {
  expect(validAnagram('aaz', 'zza')).toBe(false);
});

test('Anagrams have same chars', () => {
  expect(validAnagram('anagram', 'nagaram')).toBe(true);
});

test('Strings with different chars are not anagram', () => {
  expect(validAnagram('rat', 'car')).toBe(false);
});

test('Anagrams should have same chars', () => {
  expect(validAnagram('awesome', 'awesom')).toBe(false);
});

test('Anagrams have same chars', () => {
  expect(validAnagram('texttwisttime', 'timetwisttext')).toBe(true);
});
