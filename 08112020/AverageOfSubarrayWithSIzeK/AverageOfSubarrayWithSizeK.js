/*
Given an array, find the average of all contiguous subarrays of size ‘K’ in it.

Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
Output: [2.2, 2.8, 2.4, 3.6, 2.8]
*/

// Sliding window method
// Each time there is k-1 numbers overlap.
//Visualize it as sliding window, every time when we move one slot, subtract the first number and add the last number
//In this way, time complexity is O(n)

var averageOfSubarrayWithSizeK = (array, k) => {
  if (k === 1) return array;
  let result = [];
  let start = 0;
  let windowSum = 0.0;
  for (let i = 0; i < array.length; i++) {
    windowSum += array[i];
    if (i >= k - 1) {
      result.push(windowSum / k);
      windowSum -= array[start];
      start++;
    }
  }
  return result;
};

var array = [1, 3, 2, 6, -1, 4, 1, 8, 2];
console.log(averageOfSubarrayWithSizeK(array, 5));
