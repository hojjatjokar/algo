import goodPairsCount from '.';

describe('goodPairsCount', () => {
  it('should return 0 when array is empty', () => {
    expect(goodPairsCount([])).toBe(0);
  });

  it('should return 0 when array has only one element', () => {
    expect(goodPairsCount([1])).toBe(0);
  });

  it('should return number of good pairs when there is any', () => {
    expect(goodPairsCount([1, 2, 3, 1, 1, 3])).toBe(4);
  });

  it('should return 0 when there is no any good pairs', () => {
    expect(goodPairsCount([1, 2, 3])).toBe(0);
  });
});
