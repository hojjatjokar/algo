import twoSum from '.';

test('Returns null when do not find the pair', () => {
  expect(twoSum([1, 8, 4, 6, 3], 3)).toBeNull;
});

test('find the right math when array contains the target value', () => {
  expect(twoSum([1, 8, 2, 6, 3], 3)).toEqual([0, 2]);
});

test('find the two items when array contain them', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('finds when answer are same value', () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});

test('find the first match when there are multiple ones', () => {
  expect(twoSum([3, 2, 4, 3, 3], 6)).toEqual([1, 2]);
});
