/*
Word Pattern
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true
Example 2:

Input:pattern = "abba", str = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", str = "dog dog dog dog"
Output: false
*/
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  let patternarr = pattern.split('');
  let strarr = str.split(' ');
  if (patternarr.length !== strarr.length) return false;
  let patternobj = {};
  let strobj = {};
  for (let i = 0; i < pattern.length; i++) {
    var char = patternarr[i];
    var word = strarr[i];
    if (patternobj[char] === undefined && strobj[word] === undefined) {
      patternobj[char] = i;
      strobj[word] = i;
    } else if (patternobj[char] === strobj[word]) {
      patternobj[char] = i;
      strobj[word] = i;
    } else {
      return false;
    }
  }
  return true;
};
