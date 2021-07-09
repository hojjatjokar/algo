import quickSort from "../quick-sort";

test('Sort array', () => {
  expect(quickSort([10, 80, 30, 90, 40, 50, 70])).toEqual([10, 30, 40, 50, 70, 80, 90]);
})

test('Sort array', () => {
  expect(quickSort([60, 80, 30, 90, 40, 50, 70])).toEqual([30, 40, 50,60, 70, 80, 90]);
})