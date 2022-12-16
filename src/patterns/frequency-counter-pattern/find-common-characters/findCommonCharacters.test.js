import findCommonChars from '.';

describe('findCommonChars', () => {
  it('should return array containing the common characters', () => {
    expect(findCommonChars(['bella', 'label', 'roller'])).toEqual([
      'l',
      'l',
      'e',
    ]);

    expect(findCommonChars(['cool', 'lock', 'cook'])).toEqual(['c', 'o']);
  });
});
