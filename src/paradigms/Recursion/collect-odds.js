function collectOdds(arr){
  if(!arr.length) return [];
  const firstItem = arr[0];
  const result = firstItem % 2 !== 0 ? [firstItem] : [];

  return result.concat(collectOdds(arr.slice(1)));
}

export default collectOdds;