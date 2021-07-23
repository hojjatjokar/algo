function sumRange(num) {
  if (num === 1) return 1;
  if (num < 1) return 0;

  return num + sumRange(num - 1);
}

export default sumRange;
