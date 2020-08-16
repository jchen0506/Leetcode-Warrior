/*
You have an array arr of length n where arr[i] = (2 * i) + 1 for all valid values of i (i.e. 0 <= i < n).

In one operation, you can select two indices x and y where 0 <= x, y < n and subtract 1 from arr[x] and add 1 to arr[y] (i.e. perform arr[x] -=1 and arr[y] += 1). The goal is to make all the elements of the array equal. It is guaranteed that all the elements of the array can be made equal using some operations.

Given an integer n, the length of the array. Return the minimum number of operations needed to make all the elements of arr equal.



Example 1:

Input: n = 3
Output: 2
Explanation: arr = [1, 3, 5]
First operation choose x = 2 and y = 0, this leads arr to be [2, 3, 4]
In the second operation choose x = 2 and y = 0 again, thus arr = [3, 3, 3].
Example 2:

Input: n = 6
Output: 9


Constraints:

1 <= n <= 10^4
*/

/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  if (n === 1) return 0;
  if (n === 2) return 1;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(2 * i + 1);
  }
  let mid = 0;
  let result = 0;
  if (n % 2 === 0) {
    mid = (arr[n / 2 - 1] + arr[n / 2]) / 2;
  } else {
    mid = arr[Math.floor(n / 2)];
  }
  for (let i = 0; i < n / 2; i++) {
    result += mid - arr[i];
  }
  return result;
};

/*
I: n length of array
O: number, least operation to be done to make them equal
C: 1<=n <=10^4
E: n=1, result =0
    n=2 result = 1

[1,3,5,7,9,11]
5,7 ->6 1
3,9 ->4,8->5,7->6 2+1=3
1,11 -> 2,10->3,9 2+3=5
2+
*/
