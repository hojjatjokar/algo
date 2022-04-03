import same from '.';

test('two arrays are the same', () => {
  expect(same([1, 2, 3, 4], [1, 2, 3, 4])).toBe(true);
});

test('two arrays are the same with different item order', () => {
  expect(same([1, 2, 3, 4], [2, 3, 1, 4])).toBe(true);
});

test('two arrays are not same when they contain different length of items', () => {
  expect(same([1, 2, 3, 4], [1, 2, 3, 4, 5])).toBe(false);
  expect(same([1, 2, 3, 4, 5], [1, 2, 3, 4])).toBe(false);
});

test('two arrays are not same when they have different sets of numbers', () => {
  expect(same([3], [1])).toBe(false);
});

test('empty arrays are the same ', () => {
  expect(same([], [])).toBe(true);
});
