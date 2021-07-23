import areThereDuplicates from './areThereDuplicates';

test('Find duplicates', () => {
  expect(areThereDuplicates([1, 2, 3])).toBe(false);
});

test('Find duplicates', () => {
  expect(areThereDuplicates([1, 2, 2])).toBe(true);
});

test('Find duplicates', () => {
  expect(areThereDuplicates(['a', 'b', 'c', 'a'])).toBe(true);
});
