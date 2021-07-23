import search from './linear-search';

test('Linear search', () => {
  expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
});

test('Linear search', () => {
  expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
});

test('Linear search', () => {
  expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
});

test('Linear search', () => {
  expect(search([21, 7, 1], 2)).toBe(-1);
});
