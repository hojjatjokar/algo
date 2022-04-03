# Same

Write a function called **same**, which accepts **two arrays**.

The function should **return true** if every value in the array has it's corresponding value in the second array.

The **frequency** of values must be the **same**.

- inputs: nums1, nums2
- output: true/false

## Case 1

When two arrays have the same items in the same order, the function should return `true`.

```js
same([1, 2, 3, 4], [1, 2, 3, 4]);
```

- inputs
  - nums1: `[1, 2, 3, 4]`
  - nums2: `[1, 2, 3, 4]`
- output: `true`

## Case 2

When two arrays have the same frequency of items but in a different order, the function should return `true`

```js
same([1, 2, 3, 4], [2, 3, 1, 4]);
```

- inputs
  - nums1: `[1, 2, 3, 4]`
  - nums2: `[2, 3, 1, 4]`
- output: `true`

## Case 3

When two arrays containt differnet length of items, the function should return `false`

```js
same([1, 2], [4, 1, 9]);
```

- inputs
  - nums1: `[1,2,3]`
  - nums2: `[4,1,9]`
- output: `false`

## Case 4

When two arrays contain different sets of numbers, the function should return `false`.

```js
same([1], [2]);
```

- inputs
  - nums1: `[1]`
  - nums2:`[2]`
- output: `true`

## Case 5

Empty arrays are the same.

```js
same([], []);
```

- inputs
  - nums1: `[]`
  - nums2: `[]`
- output: `true`
