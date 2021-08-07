import numberOfGoodPairs from './number-of-good-pairs';

test('Empty array has not good pairs', () => {
  expect(numberOfGoodPairs([])).toBe(0);
});

test('an array with one element has not good pairs', () => {
  expect(numberOfGoodPairs([1])).toBe(0);
});

test('number of good pairs', () => {
  expect(numberOfGoodPairs([1, 2, 3, 1, 1, 3])).toBe(4);
});

test('number of good pairs', () => {
  expect(numberOfGoodPairs([1, 1, 1, 1])).toBe(6);
});

test('number of good pairs', () => {
  expect(numberOfGoodPairs([1, 2, 3])).toBe(0);
});
