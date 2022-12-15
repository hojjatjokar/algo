const countConsistentStrings = (allowed: string, words: string[]) => {
  const allowedMap: { [key: string]: boolean } = {};

  for (let i = 0; i < allowed.length; i++) {
    const char = allowed[i];
    allowedMap[char] = true;
  }

  let result = 0;

  for (let word of words) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (allowedMap[char]) {
        count++;
      }
    }
    if (count === word.length) {
      result++;
    }
  }

  return result;
};

export default countConsistentStrings;
