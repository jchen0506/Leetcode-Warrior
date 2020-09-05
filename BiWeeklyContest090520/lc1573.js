/*
1573. Number of Ways to Split a String
Given a binary string s (a string consisting only of '0's and '1's), we can split s into 3 non-empty strings s1, s2, s3 (s1+ s2+ s3 = s).

Return the number of ways s can be split such that the number of characters '1' is the same in s1, s2, and s3.

Since the answer may be too large, return it modulo 10^9 + 7.



Example 1:

Input: s = "10101"
Output: 4
Explanation: There are four ways to split s in 3 parts where each part contain the same number of letters '1'.
"1|010|1"
"1|01|01"
"10|10|1"
"10|1|01"
Example 2:

Input: s = "1001"
Output: 0
Example 3:

Input: s = "0000"
Output: 3
Explanation: There are three ways to split s in 3 parts.
"0|0|00"
"0|00|0"
"00|0|0"
Example 4:

Input: s = "100100010100110"
Output: 12
*/

var numWays = function (s) {
  if (s.length === 0) return 1;
  let count = 0;
  let index = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') {
      count++;
      index.push(i);
    }
  }
  console.log(index);
  if (count === 0) {
    return (((s.length - 2) * (s.length - 1)) / 2) % (10 ** 9 + 7);
  }
  if (count % 3 !== 0) return 0;
  let first = count / 3;
  let second = (count / 3) * 2;
  return (
    ((index[first] - index[first - 1]) * (index[second] - index[second - 1])) %
    (10 ** 9 + 7)
  );
};
