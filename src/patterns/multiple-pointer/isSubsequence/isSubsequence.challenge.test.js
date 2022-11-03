import isSubsequence from './index';

describe('isSubsequence', () => {
  it('should return true when finds a subsequence', () => {
    expect(isSubsequence('hello', 'hello world')).toBe(true);
    expect(isSubsequence('hello', 'world hello world')).toBe(true);
    expect(isSubsequence('sing', 'sting')).toBe(true);
  });

  it('should return false when any subsequence', () => {
    expect(isSubsequence('abc', 'acb')).toBe(false);
  });
});
