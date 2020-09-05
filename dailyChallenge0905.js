/* All Elements in Two Binary Search Trees
Given two binary search trees root1 and root2.

Return a list containing all the integers from both trees sorted in ascending order.

Example 1:


Input: root1 = [2,1,4], root2 = [1,0,3]
Output: [0,1,1,2,3,4]
Example 2:

Input: root1 = [0,-10,10], root2 = [5,1,7,0,2]
Output: [-10,0,0,1,2,5,7,10]
Example 3:

Input: root1 = [], root2 = [5,1,7,0,2]
Output: [0,1,2,5,7]
Example 4:

Input: root1 = [0,-10,10], root2 = []
Output: [-10,0,10]
Example 5:


Input: root1 = [1,null,8], root2 = [8,1]
Output: [1,1,8,8]

Constraints:

Each tree has at most 5000 nodes.
Each node's value is between [-10^5, 10^5].
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */

//inorder traversal and then merge
var getAllElements = function (root1, root2) {
  let arr1 = inorder(root1, []);
  let arr2 = inorder(root2, []);
  console.log(arr1);
  console.log(arr2);
  let result = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] < arr2[pointer2]) {
      result.push(arr1[pointer1]);
      pointer1++;
    } else {
      result.push(arr2[pointer2]);
      pointer2++;
    }
  }
  console.log(result);
  while (pointer1 < arr1.length) {
    result.push(arr1[pointer1]);
    pointer1++;
  }
  while (pointer2 < arr2.length) {
    result.push(arr2[pointer2]);
    pointer2++;
  }
  return result;
};

var inorder = function (root, result) {
  if (root === null) return result;

  if (root.left) inorder(root.left, result);
  result.push(root.val);
  if (root.right) inorder(root.right, result);

  return result;
};
