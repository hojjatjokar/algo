function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let middle = Math.ceil((start + end) / 2);

  while (middle <= end && middle >= start) {
    if (nums[middle] === target) return middle;

    if (target > nums[middle]) {
      start = middle + 1;
    }

    if (target < nums[middle]) {
      end = middle - 1;
    }

    middle = Math.floor((start + end) / 2);
  }

  return -1;
}

export default binarySearch;
