/*
lc57 Insert Interval

Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let newstart = newInterval[0];
  let newend = newInterval[1];

  let i = 0;
  let res = [];

  //add all intervals which starts before newInterval
  while (i < intervals.length && newstart > intervals[i][0])
    res.push(intervals[i++]);

  let interval = [0, 0];
  // if newiterval starts before everything or the last added interval ends before newstart (no overlap),
  // add the newinterval directly
  if (res.length === 0 || res[res.length - 1][1] < newstart)
    res.push(newInterval);
  else {
    interval = res.pop(); // update the last interval end with newend if it's longer
    interval[1] = Math.max(interval[1], newend);
    res.push(interval);
  }

  while (i < intervals.length) {
    interval = intervals[i++];
    let start = interval[0];
    let end = interval[1];
    //if the newinterval end have no overlap with the next interval,add the interval
    if (res[res.length - 1][1] < start) res.push(interval);
    else {
      // otherwise, update the end of the last interval in result
      interval = res.pop();
      interval[1] = Math.max(interval[1], end);
      res.push(interval);
    }
  }
  return res;
};
