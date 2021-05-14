import { validationMessages } from '../../utils/strings';

function averagePair(arr, target) {
  if (!arr || !target) throw new Error(validationMessages.missingArguments);
  if (!Array.isArray(arr) || typeof target !== 'number')
    throw new Error(validationMessages.invalidArguments);
  if (arr.length === 0) return false;
  if (arr.length === 1) return false;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const average = (arr[left] + arr[right]) / 2;
    if (average === target) return true;
    if (average > target) right--;
    else left++;
  }
  return false;
}

export default averagePair;
