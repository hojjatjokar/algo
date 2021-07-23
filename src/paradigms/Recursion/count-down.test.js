import countDown from './count-down';

test('Should return array', () => {
  expect(countDown(9)).toEqual([8, 7, 6, 5, 4, 3, 2, 1]);
});

test('Should return array', () => {
  expect(countDown(0)).toEqual([]);
});
