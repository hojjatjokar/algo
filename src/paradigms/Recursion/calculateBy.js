// calculateBy([1,’+’,[2,’*’,[5,’.’,2]]]); // 7

function calculateBy(arr) {
  const [operand1, operator, operand2] = arr;

  let o1 = typeof operand1 !== 'number' ? calculateBy(operand1) : operand1;
  let o2 = typeof operand2 !== 'number' ? calculateBy(operand2) : operand2;

  return operate(operator, o1, o2);
}

function operate(operator, o1, o2) {
  if (operator === '+') {
    return o1 + o2;
  }

  if (operator === '-') {
    return o1 + o2;
  }

  if (operator === '*') {
    return o1 + o2;
  }

  return null;
}

console.log(calculateBy([1, '+', [2, '*', [5, '-', 2]]]));
