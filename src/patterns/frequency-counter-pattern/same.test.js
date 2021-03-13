import same from './same';
import {validationMessages} from '../../utils/strings';

test('[1, 2, 3, 4] same [1, 4, 9, 16]', () => {
  expect(same([1, 2, 3, 4], [1, 4, 9, 16])).toBe(true);
});

test('[1,2,3] same [4,1,9]', () => {
  expect(same([1,2,3], [4,1,9])).toBe(true);
});

test('[1,2,1] is not same [4,4,1]', () => {
  expect(same([1,2,1], [4,4,1])).toBe(false);
});

test('[] same []', () => {
  expect(same([], [])).toBe(true);
});

test('[1, 2, 3, 4] same [1, 2, 6, 8]', () => {
  expect(same([1, 2, 3, 4], [1, 2, 6, 8])).toBe(false);
});

test('Error on invalid types', () => {
  expect(() => same([], {})).toThrow(validationMessages.invalidArguments);
});
