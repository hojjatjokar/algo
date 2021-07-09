import binarySearch from './binary-search';

test('Find target in array', () => {
  expect(binarySearch([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
});

test('Proper return when item is not in array', () => {
  expect(binarySearch([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
});
