/*
Maximum Product Subarray

Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let res = nums[0];
  let maxdp = nums[0];
  let mindp = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let currmax = Math.max(nums[i], Math.max(maxdp * nums[i], mindp * nums[i]));
    mindp = Math.min(nums[i], Math.min(mindp * nums[i], maxdp * nums[i]));
    maxdp = currmax;

    res = Math.max(res, maxdp);
  }
  return res;
};
