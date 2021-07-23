import minSubArrayLen from './minSubArrayLen';

test('Min sub array', () => {
  expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2);
});

test('Min Sub array', () => {
  expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toBe(2);
});

test('Min Sub array', () => {
  expect(minSubArrayLen([3, 1, 62, 19], 52)).toBe(1);
});
