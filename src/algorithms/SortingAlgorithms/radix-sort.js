function radixSort(arr) {
  const maxLength = 4;
  let result = [...arr];

  for (let i = 0; i < maxLength; i++) {
    let placeholder = [[], [], [], [], [], [], [], [], [], [], []];

    for (const item of result) {
      const num = getBy(item, i);
      placeholder[num] = [...placeholder[num], item];
    }

    result = [];
    for (const item of placeholder) {
      if (item && Array.isArray(item)) {
        for (const innerItem of item) {
          result.push(innerItem);
        }
      }
    }
  }

  return result;
}

function getBy(num, nth) {
  const str = num.toString();
  return str.length - nth > 0 ? str[str.length - nth - 1] : 0;
}

export default radixSort;
