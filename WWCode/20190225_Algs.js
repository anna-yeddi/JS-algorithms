// == https://leetcode.com/problems/squares-of-a-sorted-array/submissions/ == //

let sortedSquares = function(A) {
    for (let i = 0; i < A.length; i++) {
        A[i] = A[i] ** 2;
        // A[i] = Math.pow(A[i], 2);
    };

    A.sort((a, b) => { a - b });

    return A;
};

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));


// == https://leetcode.com/problems/wiggle-subsequence/ == //

let wiggleSorted = (nums) => {
    // nums.sort(function(a, b) {
    //     if(nums.index % 2 === 0) {
    //         return a - b;
    //     } else {
    //         return b - a;
    //     }
    // });

    let mapped = nums.map((el, i) => {
        return { index: i, value: el };
    });

    mapped.sort((a, b) => {
        if (a.value > b.value) {
            return 1;
        }
        if (a.value < b.value) {
            return -1;
        }
        return 0;
    });

    return mapped;
};

// console.log(wiggleSorted(sortedSquares([-4,-1,0,3,10])));

// REAL task //

let wiggleMaxLength = (nums) => {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        console.log(`i = ${i}`);
        console.log(nums[i] - nums[i-1]);
        console.log(nums[i] - nums[i+1]);
        if ((nums[i] - nums[i-1]) * (nums[i] - nums[i+1]) > 0) {
            count += 1;
        }
    }
    // for (let key in nums) {
    //     if ((nums[key] - nums[key-1]) * (nums[key] - nums[key+1]) > 0) {
    //         count += 1;
    //         console.log(count);
    //     };
    // }

    return count;
}

console.log('max length: ');
console.log(wiggleMaxLength([1,7,4,9,2,5]));
console.log(wiggleMaxLength([1,17,5,10,13,15,10,5,16,8]));