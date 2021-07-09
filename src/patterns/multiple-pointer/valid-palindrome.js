function validPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while(left < right){
    if(/[^A-z0-9]/.test(str[left])) {
      left++;
      continue;
    }
    if(/[^A-z0-9]/.test(str[right])) {
      right--;
      continue
    }
    
    if(str[left].toLowerCase() === str[right].toLowerCase()) {
      left++;
      right--;
    }else {
      return false;
    }
  }
  
  return true;
}

export default validPalindrome;
