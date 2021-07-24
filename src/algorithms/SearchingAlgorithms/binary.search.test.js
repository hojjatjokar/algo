import search from './binary-search';

test('Binary search', () => {
  expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
});

test('Binary search', () => {
  expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
});

test('Binary search', () => {
  expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
});

test('Binary search', () => {
  expect(search([21, 7, 1], 2)).toBe(-1);
});

test('Binary search', () => {
  expect(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6)).toBe(5);
});
