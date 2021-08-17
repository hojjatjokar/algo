import { validationMessages } from '../../utils/strings';
import sort from './merge-sort';

test('merge sort should return sorted array', () => {
  expect(sort([5, 2, 1, 3, 6])).toEqual([1, 2, 3, 5, 6]);
});

test('merge sort accept one array', () => {
  expect(() => sort()).toThrow(validationMessages.missingArguments);
});

test('merge sort throws error for invalid arguments', () => {
  expect(() => sort(123)).toThrow(validationMessages.invalidArguments);
});
