# Min sub array length

Write a function called minSubArrayLen which accepts two parameters - an array
of positive integers and a positive integer. This function should return the
minimal length of a contiguous subarray of which the sum is greater than or
equal to the integer passed to the function. If there isn’t one, return 0 instead.

- Inputs
  - Array of positive integers
  - A positive integer
- Output
  - 0 or a positive number

## Examples

### Example 1

- inputs:
  - [2, 3, 1, 2, 4, 3]
  - 7
- output: 2 -> because [4, 3] is the smallest subarray

### Example 2

- inputs:
  - [2, 1, 6, 5, 4]
  - 9
- output: 2 -> because [5, 4] is the smallest subarray

### Example 3

- inputs:
  - [3, 1, 62, 19]
  - 52
- output: 1 -> because [62] is greater than 52
