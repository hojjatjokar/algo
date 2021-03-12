# Same
Write a function called **same**, which accepts **two arrays**. The function should **return true** if every value in the array has it's corresponding value squared in the second array. The **frequency** of values must be the **same**.

- inputs: nums1, nums2
- output: true/false

## Example 1:
```
  same([1,2,3], [4,1,9])
```
- inputs: nums1: [1,2,3], nums2:[4,1,9]
- output: true

## Example 2:
```
  same([1,2,1], [4,4,1])
```
- inputs: nums1: [1,2,1], nums2:[4,4,1]
- output: false
## Example 3:
```
  same([1,2], [4,1,9])
```
- inputs: nums1: [1,2,3], nums2:[4,1,9]
- output: false
## Example 4:
```
  same([], [])
```
- inputs: nums1: [], nums2:[]
- output: true

## Example 5:
```
  same('', {})
```
- inputs: nums1: '', nums2:{}
- output: throw error
