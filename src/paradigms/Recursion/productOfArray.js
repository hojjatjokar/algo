function productOfArray([front, ...end]) {
  if (front === undefined) return 1;

  return front * arrayProduct(end);
}

const arr = [1, 3, 6, 0.2, 2, 5];

console.log(arrayProduct(arr));

/*
input: [1, 3, 6, .2, 2, 5];
output: 36;
*/
