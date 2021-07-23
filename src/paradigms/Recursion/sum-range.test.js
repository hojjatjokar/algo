import sumRange from './sum-range';

test('Should sum up', () => {
  expect(sumRange(4)).toBe(10);
});

test('Should sum up one', () => {
  expect(sumRange(1)).toBe(1);
});

test('Should sum up zero', () => {
  expect(sumRange(0)).toBe(0);
});
