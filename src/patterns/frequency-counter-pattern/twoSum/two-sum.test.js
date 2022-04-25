import twoSum from './twoSum';

test('find two sum', () => {
  expect(twoSum([1, 8, 4, 6, 3], 3)).toBeNull;
});

test('find two sum', () => {
  expect(twoSum([1, 8, 2, 6, 3], 3)).toEqual([0, 2]);
});

test('find two sum', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('find two sum', () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});

test('find two sum', () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});
