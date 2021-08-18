import radixSort from './radix-sort';
import { validationMessages } from '../../utils/strings';

test('Radix Sort expects an array as its argument', () => {
  expect(() => radixSort()).toThrow(validationMessages.missingArguments);
});

test('Radix Sort expects an array as its argument', () => {
  expect(() => radixSort(123)).toThrow(validationMessages.invalidArguments);
});

test('Radix Sort', () => {
  expect(
    radixSort([1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29])
  ).toEqual([4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]);
});

test('Radix Sort for 4 digit', () => {
  expect(
    radixSort([23435, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29])
  ).toEqual([4, 7, 29, 86, 408, 593, 902, 3556, 4386, 8157, 9637, 23435]);
});

test('Radix Sort for 7 digit', () => {
  expect(
    radixSort([23435, 4, 3556, 593, 4084084, 4386, 902, 7, 8157, 86, 9637, 29])
  ).toEqual([4, 7, 29, 86, 593, 902, 3556, 4386, 8157, 9637, 23435, 4084084]);
});
