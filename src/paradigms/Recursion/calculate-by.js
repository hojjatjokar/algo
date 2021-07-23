function calculateBy(arr) {
  const [first, operator, second] = arr;

  const firstArg = typeof first === 'number' ? first : calculateBy(first);
  const secondArg = typeof second === 'number' ? second : calculateBy(second);

  return calculate(firstArg, operator, secondArg);
}

function calculate(a, operator, b) {
  if (operator === '*') return a * b;
  if (operator === '+') return a + b;
  if (operator === '/') return a / b;
  if (operator === '-') return a - b;
}

export default calculateBy;
