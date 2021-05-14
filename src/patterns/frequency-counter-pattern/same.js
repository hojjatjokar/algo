import { validationMessages } from '../../utils/strings';

/**
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {boolean}
 */
function same(arr1, arr2) {
  if (!arr1 || !arr2) throw new Error(validationMessages.missingArguments);
  if (!Array.isArray(arr1) || !Array.isArray(arr2))
    throw new Error(validationMessages.invalidArguments);
  if (arr1.length !== arr2.length) return false;

  const squaredCounter = new Map();

  for (const item of arr2) {
    if (squaredCounter.has(item))
      squaredCounter.set(item, squaredCounter.get(item) + 1);
    else squaredCounter.set(item, 1);
  }

  for (const item of arr1) {
    const squared = item ** 2;
    if (!squaredCounter.has(squared)) return false;

    if (squaredCounter.get(squared) > 0)
      squaredCounter.set(squared, squaredCounter.get(squared) - 1);
    else return false;
  }

  return true;
}

export default same;
