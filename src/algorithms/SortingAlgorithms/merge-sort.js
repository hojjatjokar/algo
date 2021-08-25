import { validationMessages } from '../../utils/strings';

function mergeSort(arr) {
  if (!arr) throw new Error(validationMessages.missingArguments);
  if (!Array.isArray(arr)) throw new Error(validationMessages.invalidArguments);

  if (arr.length < 2) return arr;

  const [firstHalf, secondHalf] = divid(arr);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function divid(arr) {
  const middle = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, middle);
  const secondHalf = arr.slice(middle, arr.length);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    while (j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr1.length) {
    result.push(arr1[j]);
    j++;
  }
  return result;
}

export default mergeSort;
