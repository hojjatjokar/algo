# Number of Good Pairs

Given an array of integers nums.

A pair `(i,j)` is called good if `nums[i] == nums[j]` and `i < j`.

Return the number of good pairs.

## Case 1

- input
  - nums: `[1, 2, 3, 1, 1, 3]`
- output: 4

Explanation: There are 4 good pairs `(0,3), (0,4), (3,4), (2,5)` 0-indexed.

## Case 2

- input
- nums: `[1, 1, 1, 1]`
- output: `6`

Explanation: Each pair in the array are good.

## Case 3

- input
  - nums = `[1, 2, 3]`
- output: `0`

## Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`
