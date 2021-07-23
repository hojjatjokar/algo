import calculateBy from './calculate-by';

test('Calculate by operators', () => {
  expect(calculateBy([1, '+', [2, '*', [5, '-', 2]]])).toBe(7);
});

test('Calculate by operators', () => {
  expect(calculateBy([24, '/', [2, '*', [5, '-', 2]]])).toBe(4);
});
