import quicksort from './quick-sort';

test('Quick sort: array with length of zero is sorted', () => {
  expect(quicksort([])).toEqual([]);
});

test('Quick sort: array with length of one is sorted', () => {
  expect(quicksort([1])).toEqual([1]);
});

test('Quick sort', () => {
  expect(quicksort([5, 2, 1, 8, 4, 7, 6, 3])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});
