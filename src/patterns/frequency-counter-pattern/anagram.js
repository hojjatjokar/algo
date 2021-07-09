function validAnagram(a, b) {
  if (a.length !== b.length) return false;

  const firstMap = new Map();

  for (const item of a) {
    if (firstMap.has(item)) firstMap.set(item, firstMap.get(item) + 1);
    else firstMap.set(item, 1);
  }

  for (const item of b) {
    if (!firstMap.has(item)) return false;
    else if (firstMap.get(item) === 0) return false;
    else firstMap.set(item, firstMap.get(item) - 1);
  }

  return true;
}

export default validAnagram;
