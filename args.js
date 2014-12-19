process.argv.forEach(function(val, index, array) {
  console.log(index + ': ' + val);
});

console.log("hello to the log.");
console.log("passed in arg: " + process.argv[2]);
