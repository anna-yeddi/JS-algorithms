let jumpingOnClouds = (c) => {
  let minJumps = 0;

  for (let i = 0; i < c.length-1; i++) {
    if ((c[i] === 0 && c[i+1] === 0) || c[i+1] === 1) {
      i++;
    };
    minJumps++;
  }

  return minJumps; 
};

console.log(jumpingOnClouds([0,1,0,0,0,1,0,0])); // 4
console.log(jumpingOnClouds([0,1,0,0,0,1,0])); // 3
console.log(jumpingOnClouds([0,0,1,0,0,1,0])); // 4
console.log(jumpingOnClouds([0,0,0,0,1,0])); // 3