import { validationMessages } from '../../utils/strings';

function sumZero(arr) {
  if (!arr) throw new Error(validationMessages.missingArguments);
  if (!Array.isArray(arr)) throw new Error(validationMessages.invalidArguments);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];

    if (sum > 0) right--;
    else left++;
  }

  return;
}

export default sumZero;
