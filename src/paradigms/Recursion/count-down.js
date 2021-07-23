function countDown(num) {
  const result = [];
  if (num <= 1) return result;
  result.push(num - 1);

  return result.concat(countDown(num - 1));
}

export default countDown;
