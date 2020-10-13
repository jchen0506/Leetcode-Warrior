/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
 *
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (37.47%)
 * Likes:    1728
 * Dislikes: 757
 * Total Accepted:    450.1K
 * Total Submissions: 1.2M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, find its minimum depth.
 *
 * The minimum depth is the number of nodes along the shortest path from the
 * root node down to the nearest leaf node.
 *
 * Note: A leaf is a node with no children.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: root = [2,null,3,null,4,null,5,null,6]
 * Output: 5
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 10^4].
 * -1000 <= Node.val <= 1000
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
 * @return {number}
 */
// const Deque = require('collections/deque');
var minDepth = function (root) {
	if (root === null) return 0;
	let queue = [];
	let mindepth = 0;
	queue.push(root);
	while (queue.length > 0) {
		let levelsize = queue.length;
		mindepth += 1;

		for (let i = 0; i < levelsize; i++) {
			let cur = queue.shift();
			if (cur.left) queue.push(cur.left);
			if (cur.right) queue.push(cur.right);
			if (!cur.left && !cur.right) {
				return mindepth;
			}
		}
	}
};
// @lc code=end
