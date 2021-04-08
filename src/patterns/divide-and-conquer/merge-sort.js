function mergeSort(arr){
  if(arr.length === 1) return arr;
  
  const middle = Math.ceil(arr.length/2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

function merge(left, right){
  
  let i = 0;
  let j = 0;
  const result = [];

  while(i < left.length  && j < right.length){
    if(left[i] < right[j]) {
      result.push(left[i]);
      i++;
    }else {
      result.push(right[j]);
      j++;
    }
  }
  
  while(i < left.length) {
    result.push(left[i]);
    i++;
  }

  while(j < right.length){
    result.push(right[j]);
    j++
  }

  return result;
}

export default mergeSort;