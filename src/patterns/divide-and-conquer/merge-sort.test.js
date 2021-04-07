import mergeSort from "./merge-sort";

test('Test for odd length', () => {
  expect(mergeSort([3,7,4,1,8,0,9])).toEqual([0,1,3,4,7,8,9]);
})

test('Test for even length', () => {
  expect(mergeSort([3,7,4,1,8,0])).toEqual([0,1,3,4,7,8]);
})