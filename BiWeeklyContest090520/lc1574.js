/*
1574. Shortest Subarray to be Removed to Make Array Sorted
Given an integer array arr, remove a subarray (can be empty) from arr such that the remaining elements in arr are non-decreasing.

A subarray is a contiguous subsequence of the array.

Return the length of the shortest subarray to remove.



Example 1:

Input: arr = [1,2,3,10,4,2,3,5]
Output: 3
Explanation: The shortest subarray we can remove is [10,4,2] of length 3. The remaining elements after that will be [1,2,3,3,5] which are sorted.
Another correct solution is to remove the subarray [3,10,4].
Example 2:

Input: arr = [5,4,3,2,1]
Output: 4
Explanation: Since the array is strictly decreasing, we can only keep a single element. Therefore we need to remove a subarray of length 4, either [5,4,3,2] or [4,3,2,1].
Example 3:

Input: arr = [1,2,3]
Output: 0
Explanation: The array is already non-decreasing. We do not need to remove any elements.
Example 4:

Input: arr = [1]
Output: 0
*/

var findLengthOfShortestSubarray = function (arr) {
  let left = 0;
  let flag = false;
  let right = arr.length - 1;

  //find the first index that is not sorted from left
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      left = i;
      flag = true;
      break;
    }
  }

  //if it's already sorted return 0
  if (!flag) return 0;

  //find the first index not sorted from right end
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i - 1] > arr[i]) {
      right = i;
      break;
    }
  }

  let temp1 = left;
  let temp2 = right;
  //if left end max element > right end min element

  //extend left
  while (temp1 >= 0 && arr[temp1] > arr[right]) {
    temp1--;
  }
  //or extend right end until leftmax < rightmin
  while (temp2 < arr.length && arr[left] > arr[temp2]) {
    temp2++;
  }
  //return the min of them
  return Math.min(right - temp1, temp2 - left) - 1;
};
