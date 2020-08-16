/*
Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

Example 1:
Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
Input:s1= "ab" s2 = "eidboaoo"
Output: False

Constraints:
The input strings only contain lower case letters.
The length of both given strings is in range [1, 10,000].
*/

var PermutationInString = (s1, s2) => {
  let obj = {};
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] in obj) {
      obj[s1[i]]++;
    } else {
      obj[s1[i]] = 1;
    }
  }
};

var s1 = 'ab';
var s2 = 'eidbaooo';
console.log(PermutationInString(s1, s2));

var s3 = 'ab';
var s4 = 'idboaoo';
console.log(PermutationInString(s1, s2));

/*
I: 2 strings, lower case, can have repeatation, 1-10000
O: boolean. if str2 contains permutaion of str1
C: 1-10,000, lower case
E: str1 is
*/

/*
go through s1 and store a hashmap (object) for each char and its frequency
for example {a:1, b:1}

using window slides strategy
left=right=0
if char not in map
  left++, right++
else
  decrement frequency of char by 1 map[char]--
  if frequency become 0
    match++
  while (right-left <=s1.length) {
    left stay
    right++
    if not in map, left=right, increment together
    else decrement frequncy again
  }
  if match=map keys number
  else left = right
*/
