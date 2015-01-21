var meetingTimes = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];

function condensedMeetingTimes(meetingTimes) {
  var condensedTimes = [],
      meetingTimesLength = meetingTimes.length;

  for (var i = 0; i < meetingTimesLength; i++) {
    condensedTimes[i] = meetingTimes[i];
  };

  return condensedTimes;
}

console.log("meeting times:", meetingTimes);
console.log("condensed times:", condensedMeetingTimes(meetingTimes));