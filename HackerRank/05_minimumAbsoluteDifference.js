let minimumAbsoluteDifference = (arr) => {
  let minDiff = Infinity,
    diff;

  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length-1; i++) {
    diff = Math.abs(arr[i] - arr[i+1]);

    minDiff = Math.min(diff, minDiff);
  }

  return minDiff;
};

console.log(minimumAbsoluteDifference([3, -7, 0])); // 3
console.log(minimumAbsoluteDifference([1, -3, 71, 68, 17])); // 3
console.log(minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75])); // 1