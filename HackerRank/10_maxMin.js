let maxMin = (k, arr) => {
  let minUnfairness = Infinity,
      subarr;

  arr.sort((a,b) => { return a-b; });
  console.log(arr);

  subarr = arr.split(0, k);
  console.log(subarr);

  return minUnfairness;
};

console.log(maxMin(2, [1, 4, 7, 2])); // 1
// console.log(maxMin(3, [10, 100, 300, 200, 1000, 20, 30])); // 20
// console.log(maxMin(4, [1,2,3,4,10,20,30,40,100,200])); // 3