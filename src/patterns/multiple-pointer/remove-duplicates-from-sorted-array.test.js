import removeDuplicates from './remove-duplicates-from-sorted-array';

test('remove duplicates', () => {
  expect(removeDuplicates([1, 2, 3, 3, 4, 5, 5, 5, 5, 6])).toEqual([
    1, 2, 3, 4, 5, 6,
  ]);
});

test('Not change if not contain duplicates', () => {
  expect(removeDuplicates([5, 6, 7, 8, 9, 10])).toEqual([5, 6, 7, 8, 9, 10]);
});
