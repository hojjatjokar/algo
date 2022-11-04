import sumZero from '.';

describe('sumZero', () => {
  it('should find the first pair', () => {
    expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3]);
  });

  it('should return undefind when fail to find a pair', () => {
    expect(sumZero([-2, 0, 1, 3])).toBe(undefined);
    expect(sumZero([1, 2, 3])).toBe(undefined);
  });
});
