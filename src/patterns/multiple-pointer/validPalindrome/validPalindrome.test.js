import validPalindrome from '.';

describe('validPalindrome', () => {
  it('should return true when string is empty', () => {
    expect(validPalindrome('')).toBe(true);
  });

  it('should return true when string is palindrome for alphanumeric string', () => {
    expect(validPalindrome('hello olleh'));
  });

  it('should return false when the string is not palindrome for alphanumeric string', () => {
    expect(validPalindrome('race a car')).toBe(false);
  });

  it('should return true when string is palindrome for non alphanumeric string', () => {
    expect(validPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  it('should return false when string is not palindrome for non alphanumeric string', () => {
    expect(validPalindrome('Hello, Bye')).toBe(false);
  });
});
