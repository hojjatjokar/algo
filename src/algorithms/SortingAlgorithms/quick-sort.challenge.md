# Quick sort

Write a function to sort an array using quick sort.

## Steps

### Step 1

[5, 2, 1, 8, 4, 7, 6, 3]

- pivot: 5
- left: [2, 1, 4, 3]
- right: [8, 7, 6]

### Step 2

- [2, 1, 4, 3]

  - pivot: 2
  - left: [1]
  - right: [3, 4]

- [8, 7, 6]

  - pivot: 8
  - left: [7, 6]
  - right: []

  ### Step 3

- [3, 4]

  - pivot: 3
  - left: []
  - right: [4]

  - [7, 6]

  - pivot: 7
  - left: [6]
  - right: []

### Step 4

[...[3, 4]]

[...[6, 7]

### Step 5

[...[...[1], 2,...[3, 4]], 5, ...[...[6, 7], 8]]

which will returns:
[1, 2, 3, 4, 5, 6, 7, 8]

## Examples:

### Example 1:

- input: [5, 2, 1, 8, 4, 7, 6, 3]
- output: [1, 2, 3, 4, 5, 6, 7, 8]
