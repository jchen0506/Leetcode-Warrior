/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
 *
 * https://leetcode.com/problems/path-sum-ii/description/
 *
 * algorithms
 * Medium (46.93%)
 * Likes:    2158
 * Dislikes: 76
 * Total Accepted:    360K
 * Total Submissions: 755.5K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,5,1]\n22'
 *
 * Given a binary tree and a sum, find all root-to-leaf paths where each path's
 * sum equals the given sum.
 *
 * Note: A leaf is a node with no children.
 *
 * Example:
 *
 * Given the below binary tree and sum = 22,
 *
 *
 * ⁠     5
 * ⁠    / \
 * ⁠   4   8
 * ⁠  /   / \
 * ⁠ 11  13  4
 * ⁠/  \    / \
 * 7    2  5   1
 *
 *
 * Return:
 *
 *
 * [
 * ⁠  [5,4,11,2],
 * ⁠  [5,8,4,5]
 * ]
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
	let allPaths = [];
	var helper = function (root, sum, curPath, allPaths) {
		if (root === null) return;
		curPath.push(root.val);
		if (root.val === sum && root.left === null && root.right === null) {
			allPaths.push(curPath.slice());
		}
		helper(root.left, sum - root.val, curPath, allPaths);
		helper(root.right, sum - root.val, curPath, allPaths);
		curPath.pop();
	};
	helper(root, sum, [], allPaths);
	return allPaths;
};
// @lc code=end
