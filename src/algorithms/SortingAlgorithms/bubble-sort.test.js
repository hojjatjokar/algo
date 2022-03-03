import bubbleSort from './bubble-sort';

test('Bubble sort', () => {
  expect(bubbleSort([4, 3, 7, 1, 2, 9, 6, 5])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 9,
  ]);
});

test('Bubble sort', () => {
  expect(bubbleSort([8, 100, 1, 10, 5, 2, 9, 90])).toEqual([
    1, 2, 5, 8, 9, 10, 90, 100,
  ]);
});

test('Bubble sort should return arr with less than 2 argument as it is', () => {
  const arr = [2];
  expect(bubbleSort(arr)).toBe(arr);
});
