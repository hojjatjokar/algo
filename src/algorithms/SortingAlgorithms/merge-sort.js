function sort(arr) {
  if (arr.length < 2) return arr;
  const [arr1, arr2] = divid(arr);

  return merge(sort(arr1), sort(arr2));
}

function divid(arr) {
  const middle = Math.floor(arr.length / 2);
  const arr1 = arr.slice(0, middle);
  const arr2 = arr.slice(middle, arr.length);

  return [arr1, arr2];
}

function merge(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

export default sort;
