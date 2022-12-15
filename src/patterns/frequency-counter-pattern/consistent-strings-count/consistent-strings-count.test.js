import countConsistentStrings from '.';

describe('countConsistentStrings', () => {
  it('should count number of consistent string', () => {
    const allowed = 'abc';
    const words = ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'];
    expect(countConsistentStrings(allowed, words)).toBe(7);
  });
});
