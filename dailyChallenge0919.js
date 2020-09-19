/*
lc 1291. Sequential Digits

An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.



Example 1:

Input: low = 100, high = 300
Output: [123,234]
Example 2:

Input: low = 1000, high = 13000
Output: [1234,2345,3456,4567,5678,6789,12345]
*/
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  let sample = '123456789';
  let result = [];
  let lowlen = low.toString().length;
  let highlen = high.toString().length;
  for (let len = lowlen; len <= highlen; len++) {
    for (let start = 0; start < 10 - len; start++) {
      let num = Number(sample.slice(start, start + len));
      if (num <= high && num >= low) {
        result.push(num);
      }
    }
  }
  return result;
};
