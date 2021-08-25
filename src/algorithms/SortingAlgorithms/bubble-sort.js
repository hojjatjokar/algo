import { validationMessages } from '../../utils/strings';

function bubbleSort(arr) {
  if (!arr) throw new Error(validationMessages.missingArguments);
  if (!Array.isArray(arr)) throw new Error(validationMessages.invalidArguments);
  if (arr.length <= 1) return arr;

  let j = arr.length;

  while (j) {
    let swapped = false;

    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }

    if (!swapped) return arr;
    j--;
  }

  return arr;
}

export default bubbleSort;
