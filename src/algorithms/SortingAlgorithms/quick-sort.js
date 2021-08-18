import { validationMessages } from '../../utils/strings';

function quickSort(arr) {
  if (!arr) throw new Error(validationMessages.missingArguments);
  if (!Array.isArray(arr)) throw new Error(validationMessages.invalidArguments);
  if (arr.length < 2) return arr;

  const pivot = 0;
  let left = [];
  let right = [];

  for (const item of arr) {
    if (item < arr[pivot]) left.push(item);
    if (item > arr[pivot]) right.push(item);
  }

  return [...quickSort(left), arr[pivot], ...quickSort(right)];
}

export default quickSort;
