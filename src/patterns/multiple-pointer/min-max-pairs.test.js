import expectExport from 'expect';
import { test } from 'picomatch';
import minMaxPair from './min-max-pairs';

test('', () => {
  expect(minMaxPair([3, 5, 2, 3])).toEqual(7);
});

test('', () => {
  expect(minMaxPair([3, 5, 4, 2, 4, 6])).toEqual(8);
});
