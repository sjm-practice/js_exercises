var meetingTimes = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];

//
// fucking douche. the interviewcake problem stated the times in the array are not guaranteed
// in order. I interpreted that as a requirement, where you can't sort the
// array first. His solution sorts the array. Which is much simpler.
// [maybe the myopic interpretation is my problem. but I was pissed none the less]
//


function condensedMeetingTimes(meetingTimes) {
  var condensedTimes = [],
      meetingTimesLength = meetingTimes.length,
      previousStart,
      previousEnd,
      currentStart,
      currentEnd;

  // if there is only one element (or none), no work to be done
  if (meetingTimesLength < 2) {
    return meetingTimes;
  }

  // first sort the array by meeting start times
  meetingTimes.sort(function(a, b) {
    return a[0] - b[0];
  });

  // in order to be able to combine multiple meetings, need to 
  // keep track of running start times and end times independent of meeting
  // (can't compare adjacent meetings alone, may span over them)
  previousStart = meetingTimes[0][0];
  previousEnd = meetingTimes[0][1];

  for (var i = 1; i < meetingTimesLength; i++) {
    currentStart = meetingTimes[i][0];
    currentEnd = meetingTimes[i][1];

    if (currentStart <= previousEnd) {
      previousEnd = previousEnd >= currentEnd ? previousEnd : currentEnd; // (keep max of the two)
    } else {
      condensedTimes.push([previousStart, previousEnd]);
      previousStart = currentStart;
      previousEnd = currentEnd;
    }
  }
  
  condensedTimes.push([previousStart, previousEnd]);  // store last meeting

  return condensedTimes;
}

console.log("meeting times:", meetingTimes);
console.log("condensed times:", condensedMeetingTimes(meetingTimes));