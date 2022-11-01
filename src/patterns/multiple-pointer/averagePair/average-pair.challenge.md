# Average pair

Write a function called averagePair.
Given a sorted array of integers and a target average,
determine if there is a pair of values in the array where the average of the pair equals the target average.
There may be more than one pair that matches the average target.

## Pieces

- inputs
  - a sorted array of integers
  - a target average
- output: true/false, if there is a pair of values in the array where the average of the pair equals the target average

## Casae 1

- inputs:
  - [1, 2, 3]
  - 2.5
- output: true

## Case 2

- inputs:
  - [1, 3, 4, 5, 6, 7, 10, 12, 19]
  - 8
- output: true

## Case 3

- inputs:
  - [-1, 0, 3, 4, 5, 6]
  - 4.1
- output: false

## Case 4

- inputs:
  - []
  - 4
- output: false
