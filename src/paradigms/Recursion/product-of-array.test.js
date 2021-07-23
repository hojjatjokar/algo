import productOfArray from './product-of-array';

test('Calc product of an array', () => {
  expect(productOfArray([1, 3, 6, 0.2, 2, 5])).toBe(36);
});

test('Calc product of an array', () => {
  expect(productOfArray([])).toBe(1);
});
