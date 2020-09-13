/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

*/

// Solution 1:
var reverse1 = function (x) {
  let res = '';

  let arr = x.toString().split('');
  if (arr[0] === '-') {
    res += '-';
    res += arr.slice(1).reverse().join('');
  } else {
    res = Number(x.toString().split('').reverse().join(''));
  }

  if (res < -1 * Math.pow(2, 31) || res > Math.pow(2, 31) - 1) return 0;
  return Number(res);
};

//Solution 2
var reverse2 = function (x) {
  let res = 0;
  while (x !== 0) {
    res = res * 10 + (x % 10);
    x = Math.trunc(x / 10);
  }
  if (res < Math.pow(2, 31) * -1 || res > Math.pow(2, 31) - 1) return 0;
  return res;
};
