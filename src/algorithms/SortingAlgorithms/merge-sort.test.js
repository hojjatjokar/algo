import sort from './merge-sort';

test('Test', () => {
  expect(sort([5, 2, 1, 3, 6])).toEqual([1, 2, 3, 5, 6]);
});
