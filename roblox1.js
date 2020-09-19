/*
Find maximum meetings in one room
There is one meeting room in a firm. There are N meetings in the form of (S[i], F[i]) where S[i] is the start time of meeting i and F[i] is duration of meeting i. Only one meeting can be hold at any point. The task is to find the maximum number of meetings that can be accommodated in the meeting room.
S = [1, 3, 0, 5, 8, 5]
F = [1, 1, 6, 2, 1, 4]
*/
//Greedy
//1. sort S with the end time of meeting
//2. iterate through S, if the start time is greater than the last meeting end, increase meeting counter, update the meeting end time
//3. return counter;

var maxMeeting = function (S, F) {
  let counter = 0;
  let last = 0;
  let meetings = [];
  for (let i = 0; i < S.length; i++) {
    let meeting = [];
    meeting.push(S[i]);
    meeting.push(S[i] + F[i]);
    console.log(meeting);
    meetings.push(meeting);
  }
  meetings.sort((event1, event2) => {
    return event1[1] - event2[1];
  });

  for (let i = 0; i < meetings.length; i++) {
    if (meetings[i][0] >= last) {
      last = meetings[i][1];
      counter++;
    }
  }
  return counter;
};
console.log(maxMeeting([1, 3, 0, 5, 8, 5], [1, 1, 6, 2, 1, 4]));
console.log(
  maxMeeting(
    [75250, 50074, 43659, 8931, 11273, 27545, 50879, 77924],
    [
      112960 - 75250,
      114515 - 50074,
      81825 - 43659,
      93424 - 8931,
      54316 - 11273,
      35533 - 27545,
      73383 - 50879,
      160252 - 77924,
    ]
  )
);
