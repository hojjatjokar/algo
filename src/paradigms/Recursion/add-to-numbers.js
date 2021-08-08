function addToNumbers(arr1, arr2, carry = 0) {
  if (!arr1.length && !arr2.length) {
    return carry ? [carry] : [];
  }

  const num1 = arr1.pop();
  const num2 = arr2.pop();
  const result = add(num1, num2, carry);
  const added = result.length > 1 ? result[1] : result[0];
  const c = result.length > 1 ? result[0] : 0;

  return [+added, ...addToNumbers(arr1, arr2, +c)];
}

function add(num1 = 0, num2 = 0, carry = 0) {
  const result = num1 + num2 + carry;
  return result.toString().split('');
}

export default addToNumbers;
