import quicksort from './quick-sort';
import { validationMessages } from '../../utils/strings';

test('Quick sort: array with length of zero is sorted', () => {
  expect(quicksort([])).toEqual([]);
});

test('Quick sort: array with length of one is sorted', () => {
  expect(quicksort([1])).toEqual([1]);
});

test('Quick sort', () => {
  expect(quicksort([5, 2, 1, 8, 4, 7, 6, 3])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

test('Quick sort: an array as a argument is required', () => {
  expect(() => quicksort()).toThrow(validationMessages.missingArguments);
});

test('Quick sort: an array as a argument is required', () => {
  expect(() => quicksort(123)).toThrow(validationMessages.invalidArguments);
});
