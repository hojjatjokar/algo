interface Map {
  [key: string]: number | undefined;
}

function validAnagram(string1: string, string2: string): boolean {
  if (string1.length === 0 && string2.length === 0) return true;
  if (string1.length !== string2.length) return false;

  const hashMap: Map = {};

  for (let char of string1) {
    hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1;
  }

  for (let char of string2) {
    if (!hashMap[char]) return false;
    hashMap[char] = hashMap[char] - 1;
  }

  return true;
}

export default validAnagram;
