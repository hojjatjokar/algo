import validAnagram from './anagram';

describe('validAnagram', () => {
  it('should return true when two strings are empty', () => {
    expect(validAnagram('', '')).toBe(true);
  });

  it('should return false when strings have different length', () => {
    expect(validAnagram('awesome', 'awesom')).toBe(false);
  });

  it('should return true when two strings have same characters', () => {
    expect(validAnagram('anagram', 'nagaram')).toBe(true);
    expect(validAnagram('texttwisttime', 'timetwisttext')).toBe(true);
  });

  test('should return false when strings contain different chars', () => {
    expect(validAnagram('rat', 'car')).toBe(false);
    expect(validAnagram('aaz', 'zza')).toBe(false);
  });
});
