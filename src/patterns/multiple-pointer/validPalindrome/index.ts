const isAlphanumeric = (chararcter: string) => {
  const regex = /^[a-z0-9]+$/i;

  return regex.test(chararcter);
};

const validPalindrome = (s: string): Boolean => {
  if (s.length === 0) return true;

  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (!isAlphanumeric(s[start])) {
      start++;
      continue;
    }

    if (!isAlphanumeric(s[end])) {
      end--;
      continue;
    }

    if (s[start].toUpperCase() !== s[end].toUpperCase()) return false;

    start++;
    end--;
  }

  return true;
};

export default validPalindrome;
