type Args = [number | Args, string, number | Args];

function calculateBy(arr: Args): number {
  const [first, operator, second] = arr;

  const firstArg = typeof first === 'number' ? first : calculateBy(first);
  const secondArg = typeof second === 'number' ? second : calculateBy(second);

  return calculate(firstArg, operator, secondArg);
}

function calculate(a: number, operator: string, b: number): number {
  if (operator === '*') return a * b;
  if (operator === '+') return a + b;
  if (operator === '/') return a / b;
  if (operator === '-') return a - b;
}

export default calculateBy;
