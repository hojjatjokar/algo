const isSubsequence = (str1: string, str2: string) => {
  let firstPointer = 0;
  let secondPointer = 0;

  while (firstPointer < str1.length && secondPointer < str2.length) {
    if (str1[firstPointer] === str2[secondPointer]) {
      firstPointer++;
    }

    secondPointer++;
  }

  return firstPointer === str1.length;
};

export default isSubsequence;
