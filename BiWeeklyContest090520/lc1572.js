/*
1572. Matrix Diagonal Sum
Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.



Example 1:


Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.
Example 2:

Input: mat = [[1,1,1,1],
              [1,1,1,1],
              [1,1,1,1],
              [1,1,1,1]]
Output: 8
Example 3:

Input: mat = [[5]]
Output: 5
*/

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let m = mat.length;
  //find repeated center number

  let sum = 0;
  for (let i = 0; i < m; i++) {
    sum += mat[i][i];
    sum += mat[m - i - 1][i];
  }
  if (m % 2 !== 0) {
    var centerIdx = Math.floor(m / 2);
    var center = mat[centerIdx][centerIdx];
    sum -= center;
  }
  return sum;
};
