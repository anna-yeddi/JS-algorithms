/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// Wrong Option 1 (from Java solution):
var invertTreeJava = function(root) {  
  if (!root) { return null }
  if (root.left != null && root.right != null) { 
      let tempLeft = root.left;
      let tempRight = root.right;
      root.right = tempLeft;
      root.left = tempRight;
      
      invertTreeJava(root.left);
      invertTreeJava(root.right);
  }
    return root;
};

// Option 2 (fast JS):
var invertTree = function(root) {
  if (root) {
      let left = invertTree(root.left);
      root.left = invertTree(root.right);
      root.right = left;
  }
  return root;
};

// Pseud-Option 3 (array):
let invertTreeArr = (root) => {
  let toRet = [root[0]];

  for (let j = 1; j < root.length; j = j*2 + 1) {
    for (let i = j*2; i >= j; i--) {
      toRet.push(root[i]);
    }
  }
  
  return toRet;
};


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let bts1 = [4, 2,7, 1,3,6,9, 8,4,5,3,1,9,2,7];
// console.log(invertTree(bts1)); // [4, 7,2, 9,6,3,1, 7,2,9,1,3,5,4,8]

let bts = [4,2,7,1,3,6,9];
console.log(invertTree(bts)); // [4, 7,2, 9,6, 3,1]

// Input:
//       4
//     /   \
//    2     7
//   / \   / \
//  1   3 6   9

// Output:
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1