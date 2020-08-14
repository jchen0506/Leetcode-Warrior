/*
Given a string, find the length of the longest substring T that contains at most k distinct characters.

Example 1:

Input: s = "eceba", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.
Example 2:

Input: s = "aa", k = 1
Output: 2
Explanation: T is "aa" which its length is 2.

Best time complexity O(n), best space complexity O(K)
*/

var lengthOfLongestSubstringKDistinct = function (s, k) {
  if (s.length === 0) return 0;
  if (k === 0) return 0;
  let obj = {};
  let arr = s.split('');
  let left = 0;
  let right = 1;
  obj[arr[0]] = 1;
  let max = 0;
  while (right < arr.length) {
    let char = arr[right];
    if (obj[char] === undefined) {
      obj[char] = 1;
    }
    if (Object.keys(obj).length > k) {
      if (right - left > max) max = right - left;
      left++;
      right = left + 1;
      obj = {};
    }
    right++;
  }
  return max === 0 ? right - left : max;
};
