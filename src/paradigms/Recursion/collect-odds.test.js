import collectOdds from './collect-odds';

test('Returns odds', () => {
  expect(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 3, 5, 7, 9]);
});

test('Returns empty', () => {
  expect(collectOdds([2, 4, 6, 8])).toEqual([]);
});

test('Returns empty', () => {
  expect(collectOdds([])).toEqual([]);
});
