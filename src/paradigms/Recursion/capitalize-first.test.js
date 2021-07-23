import capitalizeFirst from './capitalizeFirst';

test('Capitalize First', () => {
  expect(capitalizeFirst(['car', 'taco', 'banana'])).toEqual([
    'Car',
    'Taco',
    'Banana',
  ]);
});
