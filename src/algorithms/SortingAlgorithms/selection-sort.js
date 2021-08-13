import { validationMessages } from '../../utils/strings';

function selectionSort(arr) {
  if (!arr) throw new Error(validationMessages.missingArguments);
  if (!Array.isArray(arr)) throw new Error(validationMessages.invalidArguments);
  if (arr.length <= 2) return arr;

  for (let i = 0; i < arr.length - 1; i++) {
    let min = arr[i];
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}

export default selectionSort;
