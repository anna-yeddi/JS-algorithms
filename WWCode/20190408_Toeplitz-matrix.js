// https://leetcode.com/problems/toeplitz-matrix/
// A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

let diagonalsOk = function (m) {
    if (m[0][0] == null) {
        return true;
    }

    for (let r = 0; r < m.length - 1; r++) {
        for (let c = 0; c < m[r].length - 1; c++) {
            if (m[r][c] !== m[r+1][c+1]) {
                return false;
            }
        };
    };

    return true;
};

let test = [
    [1,2],
    [3,1],
    [2,3]
];
let test1 = [
    [1,2],
    [3,1],
    [2,4]
];

console.log(diagonalsOk(test)); // true
console.log(diagonalsOk(test1)); // false

let matrix1 = [
    [1,2,3,4],
    [5,1,2,3],
    [9,5,1,2]
];

let matrix2 = [
    [1,2],
    [2,2]
];

console.log(diagonalsOk(matrix1)); // true
console.log(diagonalsOk(matrix2)); // false



// ======= MEETUP VERSION ======= //

// let diagonalsOk = function(m) {
//     let r, c, value;

//     if (m[0][0] == null) {
//         return true;
//     }

//     for (j = 0; j < m.length; j++) {

//         for (let i = 0; i < m[0].length; i++) {
//             r = j;
//             c = i;
//             value = m[r][c];

//             while (r < m.length) {

//                 if (m[r][c] == null) {
//                     break;
//                 } else if (m[r][c] !== value) {
//                     return false;
//                 }

//                 if (c < m[r].length - 1) {
//                     c += 1;
//                 } else {
//                     break;
//                 };

//                 r += 1;
//             };
//         };
//     };

//     return true;
// };



// ======= LONG VERSION ======= //

// let diagonalsOk = function(m) {
//     let r, c, value;
//     if(m[0][0] == null) {
//         return true;
//     }
//     console.log(m);

//     for(j = 0; j < m.length; j++) {
//         console.log(`now R is ${r}`);
//         for(let i = 0; i < m[0].length; i++) {
//             r = j;
//             c = i;
//             value = m[r][c];
//             console.log(`Loop ${i} A, c=${c}`);
//             while(r < m.length) {
//                 console.log(`while? r=${r}, c=${c}, val=${value}`);    
        
//                 if(m[r][c] == null) {
//                     console.log(null);
//                     break;
//                 } else if(m[r][c] !== value) {
//                     console.error(false);
//                     return false;
//                 }
    
//                 console.log(r, c, value);
    
//                 if(c < m[r].length - 1) {
//                     c += 1;
//                     console.log(`c=${c}`);
//                 } else {
//                     console.log('last');
//                     // return true;
//                     break;
//                 };
//                 r += 1;
//                 console.log(`r=${r}`);
//             };
//             console.log(`End loop ${i} A`);
//         };

//         console.log(`this R is ${r}`);
//     };

// // End:
//     console.log('!!!Finish!!!');
//     console.error(true);
//     return true;
// };