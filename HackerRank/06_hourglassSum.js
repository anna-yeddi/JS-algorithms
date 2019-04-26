let hourglassSum = (arr) => {
  let maxSum = -Infinity,
    currSum;

  for(let i = 1; i < arr.length-1; i++) {
    for (let j = 1; j < arr[0].length-1; j++) {
      currSum = arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1] + 
                                arr[i][j] + 
                arr[i+1][j-1] + arr[i+1][j] + arr[i+1][j+1];
      maxSum = Math.max(currSum, maxSum);
    } 
  }

  return maxSum;
};

let arr1 = [
  [-9,-9,-9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9,-9,-9, 1, 2, 3],
  [0,  0, 8, 6, 6, 0],
  [0,  0, 0,-2, 0, 0],
  [0,  0, 1, 2, 4, 0]];

console.log(hourglassSum(arr1)); // 28
  
let arr2 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]];
  
console.log(hourglassSum(arr2)); // 19