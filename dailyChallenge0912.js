/*
Combination Sum III

Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

Note:

All numbers will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: k = 3, n = 7
Output: [[1,2,4]]
Example 2:

Input: k = 3, n = 9
Output: [[1,2,6], [1,3,5], [2,3,4]]
*/
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let result = [];

  var backtracking = function (combination, last, remaining) {
    if (remaining === 0) {
      if (combination.length === k) result.push(combination);
      return;
    }

    for (let i = last + 1; i < 10; i++) {
      if (i > remaining) break;
      backtracking(combination.concat(i), i, remaining - i);
    }
  };

  backtracking([], 0, n);
  return result;
};
