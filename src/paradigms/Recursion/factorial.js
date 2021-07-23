function factorial(num) {
  if (num < 1) return Infinity;
  if (num === 1) return 1;

  return num * factorial(num - 1);
}

export default factorial;
