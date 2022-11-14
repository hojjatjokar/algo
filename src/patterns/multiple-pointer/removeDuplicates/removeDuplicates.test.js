import removeDuplicates from '.';

describe('removeDuplicates', () => {
  it('should remove duplicates in place', () => {
    expect(removeDuplicates([1, 2, 3, 3, 4, 5, 5, 5, 5, 6])).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });

  it('should not change if not contain duplicates', () => {
    expect(removeDuplicates([5, 6, 7, 8, 9, 10])).toEqual([5, 6, 7, 8, 9, 10]);
  });

  it('should return empty array for empty array', () => {
    expect(removeDuplicates([])).toEqual([]);
  });

  it('should return the input array when it contains one item', () => {
    expect(removeDuplicates([5])).toEqual([5]);
  });
});
