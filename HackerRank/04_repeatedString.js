let repeatedString = (s, n) => {
  let numOfAs = 0,
    mod,
    arr = s.split('');
    
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'a') {
      numOfAs++;
    }
  }
  
  mod = n % arr.length;
  numOfAs = numOfAs * (n - mod) / arr.length;

  if (mod !== 0) {
    for (let i = 0; i < mod; i++) {
      if (arr[i] === 'a') {
        numOfAs++;
      }
    }
  }

  return numOfAs;
};

console.log(repeatedString('aba', 10)); // 7
console.log(repeatedString('a', 1000000000000)); // 1000000000000