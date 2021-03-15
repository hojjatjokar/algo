/* 
  Write a function called averagePair.
  Given a sorted array of integers and a target average,
  determine if there is a pair of values in the array where the average of
  the pair equals the target average.
  There may be more than one pair that matches the average target.
*/

function averagePair(arr, val) {
  let i = 0;
  let j = arr.length;

  while (i < j) {
    const average = arr[i] + arr[j] / 2;

    if (average === val) return true;
    if (average < val) i++;
    else j--;
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 4, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));
