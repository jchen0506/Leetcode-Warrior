/*
Replace All ?'s to Avoid Consecutive Repeating Characters
Given a string s containing only lower case English letters and the '?' character, convert all the '?' characters into lower case letters such that the final string does not contain any consecutive repeating characters. You cannot modify the non '?' characters.

It is guaranteed that there are no consecutive repeating characters in the given string except for '?'.

Return the final string after all the conversions (possibly zero) have been made. If there is more than one solution, return any of them. It can be shown that an answer is always possible with the given constraints.



Example 1:

Input: s = "?zs"
Output: "azs"
Explanation: There are 25 solutions for this problem. From "azs" to "yzs", all are valid. Only "z" is an invalid modification as the string will consist of consecutive repeating characters in "zzs".
Example 2:

Input: s = "ubv?w"
Output: "ubvaw"
Explanation: There are 24 solutions for this problem. Only "v" and "w" are invalid modifications as the strings will consist of consecutive repeating characters in "ubvvw" and "ubvww".
Example 3:

Input: s = "j?qg??b"
Output: "jaqgacb"
Example 4:

Input: s = "??yw?ipkj?"
Output: "acywaipkja"


Constraints:

1 <= s.length <= 100

s contains only lower case English letters and '?'.
*/

/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  let alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (i === 0 && s[i] === '?') {
      let j = 0;
      while (alphabet[j] === s[1]) {
        j++;
      }

      result += alphabet[j];
    } else if (s[i] === '?') {
      let j = 0;
      while (alphabet[j] === result[i - 1] || alphabet[j] === s[i + 1]) {
        j++;
      }
      result += alphabet[j];
      console.log(result);
    } else if (i === s.length - 1 && s[i] === '?') {
      let j = 0;
      while (alphabet[j] === result[i - 1]) {
        j++;
      }
      result += alphabet[j];
      console.log(result);
    } else {
      result += s[i];
    }
  }
  return result;
};
