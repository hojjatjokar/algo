import factorial from './factorial';

test('Should return factorial', () => {
  expect(factorial(4)).toBe(24);
});

test('Should return factorial', () => {
  expect(factorial(8)).toBe(40320);
});

test('Should not support zero or negative numbers', () => {
  expect(factorial(-1)).toBe(Number.POSITIVE_INFINITY);
});
