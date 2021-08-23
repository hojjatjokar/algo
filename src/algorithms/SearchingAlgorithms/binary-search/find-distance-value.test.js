import { test } from '@jest/globals';
import findDistane from './find-distance-value';

test('Find Distance', () => {
  expect(findDistane([4, 5, 8], [10, 9, 1, 8], 2)).toBe(2);
});

test('Find Distance', () => {
  expect(findDistane([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3)).toBe(2);
});

test('Find Distance', () => {
  expect(findDistane([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6)).toBe(1);
});
