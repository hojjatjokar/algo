import averagePair from './average-pair';
import { validationMessages } from '../../utils/strings';

test('Could find average for float', () => {
  expect(averagePair([1, 2, 3], 2.5)).toBe(true);
});

test('Should find for integers', () => {
  expect(averagePair([1, 3, 4, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
});

test('Should return false when could not', () => {
  expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
});

test('Should support for empty array', () => {
  expect(averagePair([], 4)).toBe(false);
});

test('Should support for single element array', () => {
  expect(averagePair([1], 4)).toBe(false);
});

test('Should throw for missing arguments', () => {
  expect(() => averagePair()).toThrow(validationMessages.missingArguments);
});

test('Should throw for missing arguments', () => {
  expect(() => averagePair('hi', 'bye')).toThrow(
    validationMessages.invalidArguments
  );
});
