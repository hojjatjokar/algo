import addToNumbers from './add-to-numbers.js';

test('Add to numbers', () => {
  expect(addToNumbers([2, 4, 3], [5, 6, 4])).toEqual([7, 0, 8]);
});

test('Add to numbers', () => {
  expect(addToNumbers([0], [0])).toEqual([0]);
});

test('Add to numbers', () => {
  expect(addToNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])).toEqual([
    8, 9, 9, 9, 0, 0, 0, 1,
  ]);
});
