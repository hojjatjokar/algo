function power(a, b){
  if(b === 1) return a;

  return a * power(a, b-1);
}

export default power;
