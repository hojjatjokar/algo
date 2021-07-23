function capitalizeFirst(arr) {
  if (!arr.length) return [];

  const [word, ...rest] = arr;
  const capitalized = `${word[0].toUpperCase()}${word.slice(1)}`;

  return [capitalized].concat(capitalizeFirst(rest));
}

export default capitalizeFirst;
