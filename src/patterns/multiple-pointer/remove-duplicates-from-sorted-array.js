function removeDuplicates(arr) {
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      arr.splice(j, 1);
    } else {
      i++;
      j++;
    }
  }

  return arr;
}

export default removeDuplicates;
