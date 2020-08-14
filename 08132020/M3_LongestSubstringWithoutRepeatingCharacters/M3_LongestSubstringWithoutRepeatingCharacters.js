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
  let max = 0;
  let obj = {};
  for (let left = 0, right = 0; right < s.length; right++) {
    // if the character already exists, update left pointer to the first duplciate index + 1; [a,b,c,a,b,c] left=0 => left =1, [a,b,c,c,d] left = 0 => left =3;
    if (obj[s[right]] !== undefined) {
      // the maximum function here will ensure, chars are not in this current window will not be considered. Because it will be before left
      left = Math.max(obj[s[right]], left);
    }
    // no matter if it's a new char, add or update the char to obj and map it to its latest right index, the left index updating depends on it. it can also be done in above command where when updating left, update it to obj[s[right]]+1 instead of obj[s[right]]
    obj[s[right]] = right + 1;

    // keep updating max when window expand
    max = Math.max(max, right - left + 1);
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
