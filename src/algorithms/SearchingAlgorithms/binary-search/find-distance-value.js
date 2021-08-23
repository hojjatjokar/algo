function findRightIndex(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > value) {
      return i;
    }
  }

  return arr.length;
}

function insert(arr, value) {
  const tempArray = [...arr];
  const index = findRightIndex(tempArray, value);
  tempArray.splice(index, 0, value);

  return [index, tempArray];
}

function findDistane(arr1, arr2, d) {
  let result = 0;
  arr2 = arr2.sort((a, b) => a - b);

  for (const a of arr1) {
    const [index, tempArray] = insert(arr2, a);

    if (Math.abs(a - tempArray[index - 1]) <= d) continue;
    if (Math.abs(a - tempArray[index + 1]) <= d) continue;

    result++;
  }

  return result;
}

export default findDistane;
