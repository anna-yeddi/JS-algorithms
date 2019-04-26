// Linked list (good for interations and removal):
ll = ListNode(5)
    ll.val = 5;
    ll.next = null;
// we won't know what;s next untill we get inside and see it

// 1) switch it to the binary search tree (BST) by
    // finding a root and both branches will be same depth
    // 2) recursion!
    // ?? finding the base case ???
    // leaf - end of the tree (no next)
    // 1 - find the middle, make it a root of the next list;
    // 2 - cutoff the original list, 1,5,7 (7.next = null)
    // 3 - repeat with the branches

//  1 => 5 => 7 => 8 => 9 => 11 => 13
// 8 - root
// 5 & 11 - roots (one level lower)
// 1, 7 & 9, 13 - leafs

//      8
//     / \
//    5   11
//   / \  / \
//  1  7  9 13


let list = [-10, -3, 0, 5, 9],
    head, headPos, tree;

// function list(num) {
//     this.num = num;
//     this.next = null;
// }

// function tree(num) {
//     this.num = num;
//     this.left = this.right = null;
// }

class Tree() {
    constructor(list) {
        this.list = list;
    }
    method findHead(list) {
        headPos = (list.length / 2 - 1).toFixed(0);
        head = list[headPos];
        return head, headPos;
        console.log(`Head is ${head} at ${headPos}`);
}

}

findHead(list);

tree = {head};

function left(list, headPos) {
    console.log(list.slice(0, headPos));
}

left(list, headPos)

// ?? tree

// ======= #1

// let nums = [1, 3, 5, 6],
//     target = 10,
//     solution = 0;

// function searchInsert(nums, target) {
//     let i = null;
//     while (i <= nums.length -1) {
//         if (target <= nums[i]) {
//             solution = nums.indexOf(nums[i]);
//             break;
//         } else if (i === nums.length -1) {
//             solution = nums.length;
//             break;
//         } else {
//             i++;
//         }
//     }
//     return solution;
// }

// searchInsert(nums, target);
// console.log(solution);