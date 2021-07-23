import fibonacci from './fibonacci';

test('fibonacci', () => {
  expect(fibonacci(5)).toBe(3);
});

test('fibonacci', () => {
  expect(fibonacci(8)).toBe(13);
});
