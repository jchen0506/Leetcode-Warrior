/*
Partition Lables

A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.



Example 1:

Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.


Note:

S will have length in range [1, 500].
S will consist of lowercase English letters ('a' to 'z') only.
*/
/**
 * @param {string} S
 * @return {number[]}
 */

//record the last index for each character
//iterate through S and extend the partition pointer based on the largest index for all the chars in this partition
var partitionLabels = function (S) {
  let last = {};
  for (let i = 0; i < S.length; i++) {
    last[S[i]] = i;
  }
  let start = 0;
  let end = 0;
  let res = [];

  for (let i = 0; i < S.length; i++) {
    end = Math.max(end, last[S[i]]);
    if (end === i) {
      res.push(end - start + 1);
      start = end + 1;
    }
  }
  return res;
};
