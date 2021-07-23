# Some

Write a recursive function called someRecursive which accepts an array and a callback. The function returns `true` if a single value in the array returns true when passed to the callback. Otherwise it returns false.

## Examples

### Example 1

- inputs:
  - array: [4, 6, 8, 9]
  - callback: val => val % 2 !== 0
- output: true

### Example 2

- inputs:
  - array: [4, 6, 8]
  - callback: val => val % 2 !== 0
- output: false

### Example 3

- inputs:
  - array: [1, 2, 3, 4]
  - callback: val => val % 2 !== 0
- output: true

### Example 4

- inputs:
  - array: [4, 6, 8]
  - callback: val => val > 10
- output: false
