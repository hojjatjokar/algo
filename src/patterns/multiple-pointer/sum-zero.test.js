import sumZero from './sum-zero';

test('find first pair', () => {
  expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3]);
});

test('return undefind when fail to find a pair', () => {
  expect(sumZero([-2, 0, 1, 3])).toBe(undefined);
});

test('return undefind when fail to find a pair', () => {
  expect(sumZero([1, 2, 3])).toBe(undefined);
});
