// Write a recursive function called capitalizeFirst. Given an array of strings,
// capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
  if (arr.length === 0) return [];

  const current = arr.splice(0, 1)[0];

  return [
    `${current[0].toUpperCase()}${current.slice(1)}`,
    ...capitalizeFirst(arr),
  ];
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car', 'Taco', 'Banana']
