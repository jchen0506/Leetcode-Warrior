/*
Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.

Example 1:

Input: arr = [2,6,4,1]
Output: false
Explanation: There are no three consecutive odds.
Example 2:

Input: arr = [1,2,34,3,4,5,7,23,12]
Output: true
Explanation: [5,7,23] are three consecutive odds.
*/

var threeConsecutiveOdds = function (arr) {
  if (arr.length < 3) return false;
  let cur = true;
  let start = 0;
  let end = 0;
  while (end < arr.length) {
    if (arr[end] % 2 !== 0) end++;
    else {
      end++;
      start = end;
    }
    if (end - start >= 3) return true;
  }
  return false;
};
