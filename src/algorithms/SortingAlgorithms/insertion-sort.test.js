import insertionSort from './insertion-sort';

test('Insersion sort', () => {
  expect(insertionSort([5, 3, 4, 1, 2])).toEqual([1, 2, 3, 4, 5]);
});

test('Insersion sort', () => {
  expect(insertionSort([3, 45, 5, 2, 48, 36, 22])).toEqual([
    2, 3, 5, 22, 36, 45, 48,
  ]);
});

test('Insersion sort missing argument', () => {
  expect();
});

test('Insersion sort invalid argument', () => {});

test('Insersion sort array with less than 2', () => {});
