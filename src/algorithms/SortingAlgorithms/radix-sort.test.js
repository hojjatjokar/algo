import radixSort from './radix-sort';

test('Radix Sort', () => {
  expect(
    radixSort([1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29])
  ).toEqual([4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]);
});
