function hasDuplicate(arr: number[]): boolean {
  const hashMap: { [key: string]: number } = {};

  for (let item of arr) {
    if (hashMap[item]) return true;
    hashMap[item] = 1;
  }

  return false;
}

export default hasDuplicate;
