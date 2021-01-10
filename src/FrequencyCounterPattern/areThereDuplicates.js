/*
Implement a function called, areThereDuplicates 
which accepts a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in.
*/

// Frequency Pattern
function areThereDuplicatesI(...args) {
  const map = new Map();

  for (const value of args) {
    if (map.has(value)) return true;
    else map.set(value);
  }

  return false;
}

// Set
function areThereDuplicatesII(...args) {
  const set = new Set(args);

  return set.size !== args.length;
}

// multiple pointer
function areThereDuplicatesIII(...args) {
  let i = 0;

  args.sort();

  for (let j = 1; j < args.length; i++, j++) {
    if (args[i] === args[j]) return true;
  }

  return true;
}

// check
console.log(areThereDuplicatesI(1, 2, 3)); // false
console.log(areThereDuplicatesI(1, 2, 2)); // true
console.log(areThereDuplicatesI('a', 'b', 'c', 'a')); // true
console.log(areThereDuplicatesII(1, 2, 3));
console.log(areThereDuplicatesII(1, 2, 2));
console.log(areThereDuplicatesII('a', 'b', 'a'));
console.log(areThereDuplicatesIII(1, 2, 3));
console.log(areThereDuplicatesIII(1, 2, 2));
console.log(areThereDuplicatesIII('a', 'b', 'a'));
