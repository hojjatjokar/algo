import countUniqueValues from './index';

describe('countUniqueValues', () => {
  it('should return zero for empty array', () => {
    expect(countUniqueValues([])).toBe(0);
  });

  it('should return one for array with one item', () => {
    expect(countUniqueValues([3])).toBe(1);
  });

  it('should not count repeatative numbers', () => {
    expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2);
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
  });

  it('should works for negative numbers', () => {
    expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4);
  });
});
