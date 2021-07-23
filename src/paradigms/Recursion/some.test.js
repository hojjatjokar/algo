import some from './some';

const isOdd = val => val % 2 !== 0;

test('Some of array with callback', () => {
  expect(some([4, 6, 8, 9], isOdd)).toBe(true);
});

test('Some of array with callback fail', () => {
  expect(some([4, 6, 8], isOdd)).toBe(false);
});

test('Some of array with callback success', () => {
  expect(some([1, 2, 3, 4], isOdd)).toBe(true);
});

test('Some of array with callback fail', () => {
  expect(some([4, 6, 8], val => val > 10)).toBe(false);
});
