function some(arr, callback) {
  if (arr.length === 0) return false;

  return callback(arr[0]) || some(arr.slice(1), callback);
}

export default some;
