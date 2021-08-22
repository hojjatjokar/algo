function findDistane(arr1, arr2, d) {
  let result = 0;

  for (const a of arr1) {
    const count = 0;

    for (const b of arr2) {
      if (Math.abs(a - b) <= d) {
        count = 0;
        break;
      }
    }
    result += count;
  }

  return result;
}

export default findDistane;
