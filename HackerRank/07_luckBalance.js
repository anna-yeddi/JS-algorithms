let luckBalance = (k, contests) => {
  // k = can loose; luck balance & importance
  let maxLuck = 0,
    wins = [],
    currLuck = 0;

  for (let i = 0; i < contests.length; i++) {
    if (contests[i][1] === 0) {
      currLuck += contests[i][0];
    } else {
      wins.push(contests[i][0]);
    }
  }

  wins.sort((a,b) => {
    return a - b;
  });
  
  // maxLuck = wins.reduce((sum, curr) => {
  //   return sum + curr;
  // });
  
  for (let i = 0; i < wins.length; i++) {
    maxLuck += wins[i]
  }

  if (wins.length > k) {
    for (let i = 0; i < wins.length-k; i++) {
      maxLuck -= wins[i]*2;
    }
  }

  return maxLuck = maxLuck + currLuck;
};

console.log(luckBalance(2,[[5,1],
                          [1,1],
                          [4,0]])); // 10

console.log(luckBalance(1,[[5,1],
                          [1,1],
                          [4,0]])); // 8

console.log(luckBalance(3,[[5, 1],
                          [2, 1],
                          [1, 1],
                          [8, 1],
                          [10,0],
                          [5, 0]])); // 29