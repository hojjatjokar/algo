import selectionSort from './selection-sort';
import { validationMessages } from '../../utils/strings';

test('Selection sort ', () => {
  expect(selectionSort([12, 2, 9, 4, 8, 3, 6])).toEqual([2, 3, 4, 6, 8, 9, 12]);
});

test('Selection sort ', () => {
  expect(selectionSort([3, 7, 12, 15, 16])).toEqual([3, 7, 12, 15, 16]);
});

test('Selection sort should throw error when missing argument', () => {
  expect(() => selectionSort()).toThrow(validationMessages.missingArguments);
});

test('Selection sort should throw error when invalid argument', () => {
  expect(() => selectionSort(123)).toThrow(validationMessages.invalidArguments);
});

test('Selection sort should return same array when length is less than 3', () => {
  const arr = [1];
  expect(selectionSort(arr)).toBe(arr);
});
