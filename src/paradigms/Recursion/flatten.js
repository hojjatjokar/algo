function flatten(arr) {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) return acc.concat(flatten(curr));
    return [...acc, curr];
  }, []);
}

export default flatten;
