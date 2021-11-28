import countUniqueValues from './count-unique-values';

test('Simple', () => {
  expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2);
});

test('More complex', () => {
  expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
});

test('Negative numbers', () => {
  expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4);
});

test('Empty argument', () => {
  expect(countUniqueValues([])).toBe(0);
});

test('Single argument content', () => {
  expect(countUniqueValues([1])).toBe(1);
});
