let getMinimumCost = (k, c) => {
  let prevPurch, currPrice,
    currCost = 0;

  // Create a friends' purchases array
  prevPurch = Array(k);
  prevPurch.fill(0);

  // Sort the flowers' prices
  c = c.sort((a, b) => a - b);

  // Buy from the most expensive back
  
  for (let i = c.length - 1; i >=0; i--) {
    let f = 0;

    while (f < k) {
      currPrice = (prevPurch[f] + 1) * c[i];
      prevPurch[f]++;
      currCost += currPrice;
      f++;

      if (f < k && i !== 0) {
        i--;
      } else {
        break;
      }

      if (i === 0) {
        if (f < k) {
          currCost += (prevPurch[f] + 1) * c[i];
        } else {
          currCost += (prevPurch[k-1] + 1) * c[i];
        }
        break;
      }
    }
  }

  return currCost;
};

console.log(getMinimumCost(3, [1,2,3,4])); // 11
console.log(getMinimumCost(3, [2, 5, 6])); // 13
console.log(getMinimumCost(2, [2, 5, 6])); // 15
console.log(getMinimumCost(3, [1, 3, 5, 7, 9])); // 29
console.log(getMinimumCost(2, [1, 3, 5, 7, 9])); // 35