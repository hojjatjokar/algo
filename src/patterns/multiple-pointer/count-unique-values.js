import { validationMessages } from '../../utils/strings';

function countUniqueValues(arr) {
  if (!arr) throw new Error(validationMessages.missingArguments);
  if (!Array.isArray(arr)) throw new Error(validationMessages.invalidArguments);
  if (arr.length === 0) return 0;
  if (arr.length === 1) return 1;

  let i = 0;
  let j = 1;
  let count = 1;

  while (j < arr.length) {
    if (arr[j] > arr[i]) {
      count++;
      i = j;
    }

    j++;
  }
  return count;
}

export default countUniqueValues;
