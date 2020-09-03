/*Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

Example 1:

Input: "abab"
Output: True
Explanation: It's the substring "ab" twice.
Example 2:

Input: "aba"
Output: False
Example 3:

Input: "abcabcabcabc"
Output: True
Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  if (s.length === 1) return false;
  let cur = '';
  for (let i = 0; i < s.length / 2; i++) {
    cur += s[i];
    let len = i + 1;
    if (s.length % len !== 0) continue;
    let div = s.length / len;
    let repeated = '';
    for (let j = 0; j < div; j++) {
      repeated += cur;
    }
    if (repeated === s) return true;
  }
  return false;
};
