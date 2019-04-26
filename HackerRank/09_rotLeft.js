let rotLeft = (a, d) => {
  let arr = a.slice(d, a.length);
  let end = a.slice(0, d);

  Array.prototype.push.apply(arr, end);

  return arr;
};

let rotLeft1 = (a, d) => {
  let arr = [];

  for (let i = d; i < a.length; i++) {
    arr.push(a[i]);
  }
  for (let i = 0; i < d; i++) {
    arr.push(a[i]);
  }

  return arr;
};

console.log(rotLeft([1,2,3,4,5], 2)); // [3,4,5,1,2]
console.log(rotLeft([1,2,3,4,5], 4)); // [5,1,2,3,4]