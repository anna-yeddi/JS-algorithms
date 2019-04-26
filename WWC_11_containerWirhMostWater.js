// Brute Force Algorithm = O(n2):
let maxAreaBruteForce = (height) => {
  let maxVol = 0, level;

  for (let i = 0; i < height.length; i++) {
    let j = i+1;
    while (j < height.length) {
    // for (let j = height.length - 1; j > i; j--) {
      level = Math.min(height[i], height[j]);
      maxVol = Math.max(maxVol, level * (j-i));
      j++;
    }
  }

  return maxVol;
};


// Greedy Solution = O(n)?


let maxArea = (height) => {
  let s = 0,
      e = height.length - 1,
      volume = 0;
  
  while (s < e) {
    volume = Math.max(volume, Math.min(height[s], height[e]) * Math.abs(e-s));
    if (height[s] < height[e]) {
      s++;
    } else {
      e--;
    }
  }
  return volume;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49