let sockMerchant = (n, ar) => {
  let toRet = 0;
  ar.sort();

  for (let i = 0; i < n; i++) {
    if (ar[i] === ar[i+1]) {
      // console.log(i, ar[i]);
      toRet++;
      i++;
    }
  }

  return toRet;
};

console.log(sockMerchant(9, [20, 20, 10, 10, 10, 30, 50, 10, 20]));
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]));