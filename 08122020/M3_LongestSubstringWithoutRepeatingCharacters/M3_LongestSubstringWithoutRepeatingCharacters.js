/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
  Note that the answer must be a substring, "pwke" is a subseqnd not a substring.
 */
var lengthOfLongestSubstring = function (s) {
  if ((s.length = 0)) return 0;
  var obj = {};
  var array = s.split('');
  console.log(array);
  var left = 0;
  var right = 1;
  var current = 1;
  var max = 1;
  obj[array[left]] = left;
  while (right < array.length) {
    if (obj[array[right]] !== undefined) {
      current = right - left;
      if (max < current) max = current;
      left = obj[array[right]] + 1;
      obj[array[left]] = 1;
    }
    obj[array[right]] = 1;
    right++;
  }
  return max;
};

/*
max = 1;
cur = 1;
obj={l:1,r:1}
pwwkew
  l
   r
r=length;

*/
console.log();
