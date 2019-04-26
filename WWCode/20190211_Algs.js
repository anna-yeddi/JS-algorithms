let arr = [2, 2, 1],
    found, el,
    count = {};

let answer = function (arr) {
    for (let num of arr) {
        if (!arr.hasOwnProperty(num)) {
            tracker[num] = 1;
        } else {
            tracker[num] += 1;
        }
    }
    for (let num of Object.keys(tracker)) {
        if (tracker[num] === 1) {
            return num;
        }
    }
}

console.log(answer);

// let singleNum = arr.find(num) 
    
// let singleNum = () => {
//     for (let i = (arr.length-1); i >= 0; i--) {
//         el = arr[i]; //1

//         found = arr.find(function(j) {
//             return j !== el;
//         });
        
//         // count.push(found);
//         console.log(`${found} is found`);
//     }
// }

// console.log(singleNum());

// 
// expected output: 12

// singleNum();
// singleNum([2,2,1]);
// console.log(`${el} is el`);

// Python-style For Loop in JS:
// for (var current of arr) {
//     total += current;
// }

// FOR-IN & FOR-OF loops ????
// hash maps??

// for (num of nums) {
//     if (!object.hasOwnProperty(num)) {
//         obj[num] = 1;
//     } else {
//         return num;
//     }
// }

// for (prop in obj) {
//     if (obj.hasOwnProperty(prop)) {
//         if (obj[prop] === 1) {
//             return prop;
//         }
//     });
// }

// ?? sudo code??