function countingValleys(n, s) {
  let arr = s.split(''),
    toRet = 0,
    seaLev = 0;
    
  for (let i = 0; i < n; i++) {
    if (arr[i] == 'D') {
      // start of a valley
      if (seaLev === 0) {
        toRet++;
      }
      seaLev--;
    } else if (arr[i] == 'U') {
      // start of a mountain
      seaLev++;
    } else {
      return undefined;
    }
  }
  return toRet;
};

console.log(countingValleys(8, 'UDDDUDUU'));