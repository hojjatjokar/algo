function productOfArray([first, ...rest]) {
  if (!first) return 1;

  return first * productOfArray(rest);
}

export default productOfArray;
