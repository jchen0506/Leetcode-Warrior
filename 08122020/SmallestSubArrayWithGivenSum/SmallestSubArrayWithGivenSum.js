/*
Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

Example 1:
Input: [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].

Example 2:
Input: [2, 1, 5, 2, 8], S=7
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

Example 3:
Input: [3, 4, 1, 1, 6], S=8
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].
*/
const smallest_subarray_with_given_sum = function (s, arr) {
  // TODO: Write your code here
  let left = 0;
  let right = 0;
  let curSum = 0;
  let minLength = Infinity;
  let curLength = 0;
  while (right < arr.length) {
    curSum += arr[right];
    while (curSum >= s) {
      curLength = right - left + 1;
      if (minLength > curLength) minLength = curLength;
      curSum -= arr[left];
      left++;
    }
    right++;
  }
  if (minLength === Infinity) return 0;
  return minLength;
};

let arr = [84, -37, 32, 40, 95];
console.log(smallest_subarray_with_given_sum(167, arr));
// O(n)

/*
I: array of positive integer, S: positive number,target sum
O: lenght of shortest subarray whose sum is >= S
C:
O: if no such subarray, return 0

curSum = 2;
[2,1,5,2,8] S=7
 |
     | curSum >7, curLength=2-0+1=3, minLength=3;

 curSum=8-2=6
 [2,1,5,2,8] S=7
    |
        | curSum=8 >7, curLength=2-0+1=3, minLength=3;

 curSum=8-1=7
 [2,1,5,2,8] S=7
      |
        | curSum=7 >=7, curLength=3-2+1=2, minLength=2;

 curSum=7-5=2
 [2,1,5,2,8] S=7
        |
          | curSum=10 >=7, curLength=3-2+1=2, minLength=2;
*/
