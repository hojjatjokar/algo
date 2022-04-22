import { validationMessages } from '../../utils/strings';
import sort from './merge-sort';

test('merge sort should return sorted array', () => {
  expect(sort([5, 2, 1, 3, 6])).toEqual([1, 2, 3, 5, 6]);
});

test('merge sort should return sorted array', () => {
  const arr = [1];
  expect(sort(arr)).toEqual(arr);
});
