import hasDuplicate from '.';

describe('hasDuplicate', () => {
  it('should return false when does not find any duplication', () => {
    expect(hasDuplicate([1, 2, 3, 1])).toBe(true);
    expect(hasDuplicate(['a', 'b', 'c', 'a'])).toBe(true);
  });
  it('should return true when it find any duplication', () => {
    expect(hasDuplicate([1, 2, 3, 4])).toBe(false);
    expect(hasDuplicate(['a', 'b', 'c', 'd'])).toBe(false);
  });
});
