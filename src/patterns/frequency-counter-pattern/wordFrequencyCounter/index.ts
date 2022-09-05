const wordFrequencyCounter = (str: string) => {
  if (str.length === 0) return {};

  const hashMap: { [key: string]: number } = {};

  const words = str.split(' ');

  for (let word of words) {
    const uppercaseWord = word.toUpperCase();

    if (hashMap[uppercaseWord]) {
      hashMap[uppercaseWord] += 1;
    } else {
      hashMap[uppercaseWord] = 1;
    }
  }

  return hashMap;
};

export default wordFrequencyCounter;
