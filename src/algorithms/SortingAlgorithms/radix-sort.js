function radixSort(arr) {
  let i = 0;
  let maxLength = 1;
  let result = [...arr];

  while (i < maxLength) {
    let placeholder = [[], [], [], [], [], [], [], [], [], [], []];

    for (const item of result) {
      const itemStr = item.toString();
      if (itemStr.length > maxLength) maxLength = itemStr;

      const num = getBy(itemStr, i);
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

    i++;
  }

  return result;
}

function getBy(num, nth) {
  return num.length - nth > 0 ? num[num.length - nth - 1] : 0;
}

export default radixSort;
