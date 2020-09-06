/*
Two images A and B are given, represented as binary, square matrices of the same size.  (A binary matrix has only 0s and 1s as values.)

We translate one image however we choose (sliding it left, right, up, or down any number of units), and place it on top of the other image.  After, the overlap of this translation is the number of positions that have a 1 in both images.

(Note also that a translation does not include any kind of rotation.)

What is the largest possible overlap?

Example 1:

Input: A = [[1,1,0],
            [0,1,0],
            [0,1,0]]
       B = [[0,0,0],
            [0,1,1],
            [0,0,1]]
Output: 3
Explanation: We slide A to right by 1 unit and down by 1 unit.
Notes:

1 <= A.length = A[0].length = B.length = B[0].length <= 30
0 <= A[i][j], B[i][j] <= 1
*/
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */
var largestOverlap = function (A, B) {
  let m = A.length * 3;
  let n = A[0].length * 3;
  let matrix = [];
  for (let i = 0; i < m; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    matrix.push(row);
  }
  for (let i = A.length; i < A.length * 2; i++) {
    for (let j = A.length; j < A.length * 2; j++) {
      matrix[i][j] = A[i - A.length][j - A.length];
    }
  }
  let max = 0;
  for (let i = 0; i < m - A.length; i++) {
    for (let j = 0; j < n - A.length; j++) {
      let temp = [];
      for (let x = i; x < i + A.length; x++) {
        let row = [];
        for (let y = j; y < j + A.length; y++) {
          row.push(matrix[x][y]);
        }
        temp.push(row);
      }
      max = Math.max(testOverlap(temp, B), max);
    }
  }
  return max;
};

var testOverlap = function (A, B) {
  let m = A.length;
  let n = A[0].length;
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (A[i][j] === 1 && A[i][j] === B[i][j]) {
        console.log('A: ' + A[i][j] + ' B: ' + B[i][j]);
        count++;
      }
    }
  }
  return count;
};
