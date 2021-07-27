import selectionSort from './selection-sort';

test('Selection sort ', () => {
  expect(selectionSort([12, 2, 9, 4, 8, 3, 6])).toEqual([2, 3, 4, 6, 8, 9, 12]);
});

test('Selection sort ', () => {
  expect(selectionSort([3, 7, 12, 15, 16])).toEqual([3, 7, 12, 15, 16]);
});
