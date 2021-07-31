# Insertion Sort

Write a function that takes an array of numbers and sorts it using insertion sort

## Examples

Builds up the sort by gradually creating a larger left half which is always sorted

[ 5, 3, 4, 1, 2 ]
-----^
[ 3, 5, 4, 1, 2 ]
--------^
[ 3, 4, 5, 1, 2 ]
-----------^
[ 1, 3, 4, 5, 2 ]
--------------^
[ 1, 2, 3, 4, 5 ]

### Example 1

- input: [3, 45, 5, 2, 48, 36, 22]
- output: [2, 3, 5, 22, 36, 45, 48]

### Example 2

- input: [ 5, 3, 4, 1, 2 ]
- output: [ 1, 2, 3, 4, 5 ]
