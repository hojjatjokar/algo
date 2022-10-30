import wordFrequencyCounter from '.';

describe('wordFrequencyCounter', () => {
  it('should return empty object when string is empty', () => {
    expect(wordFrequencyCounter('')).toEqual({});
  });

  it('should return number of words in string', () => {
    expect(
      wordFrequencyCounter('My name is Xyz He is Abc Is he allright')
    ).toEqual({
      MY: 1,
      NAME: 1,
      IS: 3,
      XYZ: 1,
      HE: 2,
      ABC: 1,
      ALLRIGHT: 1,
    });
  });
});
