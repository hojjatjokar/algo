function findCommonChars(words: string[]): string[] {
  let length = words.length;
  let hash: { [key: string]: number } = {};
  let result: string[] = [];

  // hash map for first word. this will be overriden by other words.
  words[0].split('').forEach(a => {
    if (hash[a]) {
      hash[a] += 1;
    } else {
      hash[a] = 1;
    }
  });

  // remove items from hash map if they are not present in other words
  for (let i = 1; i < length; i++) {
    let tempHash: { [key: string]: number } = {};

    words[i].split('').forEach(a => {
      if (hash[a]) {
        hash[a] -= 1;
        if (tempHash[a]) {
          tempHash[a] += 1;
        } else {
          tempHash[a] = 1;
        }
      }
    });
    hash = tempHash;
  }

  for (let prop in hash) {
    result = [...result, ...prop.repeat(hash[prop]).split('')];
  }

  return result;
}

export default findCommonChars;
