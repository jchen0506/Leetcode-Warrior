// Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.
// Constrain: Solve it in O(n)

// Example 1:
// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].

// Example 2:
// Input: [2, 3, 4, 1, 5], k=2
// Output: 7
// Explanation: Subarray with maximum sum is [3, 4].

const MaxSumSubarrayOfSizeK = (array, k) => {
  let result = 0;
  //sliding window
  // get the sum of each window slide by subtract the first and add the last.
  //if sum > max, update max with sum
  //return max
  let curSum = 0;
  let start = 0;
  let max = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < array.length; i++) {
    curSum += array[i];
    if (i >= k - 1) {
      if (curSum > max) max = curSum;
      curSum -= array[start];
      start++;
    }
  }
  return max;
};

console.log(MaxSumSubarrayOfSizeK([2, 3, 4, 1, 5], 2));
