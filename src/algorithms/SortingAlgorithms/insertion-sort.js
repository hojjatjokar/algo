import { validationMessages } from '../../utils/strings';

function insertionSort(arr) {
  if (!arr) throw new Error(validationMessages.missingArguments);
  if (Array.isArray(arr)) throw new Error(validationMessages.invalidArguments);
  if (arr.length <= 2) return arr;

  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
    }
  }

  return arr;
}

insertionSort([5, 3, 4, 1, 2]);

export default insertionSort;
