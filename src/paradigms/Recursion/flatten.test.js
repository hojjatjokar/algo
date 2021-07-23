import flatten from './flatten';

test('Faltten', () => {
  expect(flatten([1, 2, 3, [4, 5]])).toEqual([1, 2, 3, 4, 5]);
});

test('Faltten', () => {
  expect(flatten([1, [2, [3, 4], [[5]]]])).toEqual([1, 2, 3, 4, 5]);
});

test('Flatten', () => {
  expect(flatten([[1], [2], [3]])).toEqual([1, 2, 3]);
});

test('Flatten', () => {
  expect(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).toEqual([1, 2, 3]);
});
