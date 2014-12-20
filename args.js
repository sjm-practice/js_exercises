process.argv.forEach(function(val, index, array) {
  console.log(index + ': ' + val);
});

// echo any arguments to the console
console.log("arguments:\n" + args.join('\n') + '\n');


console.log("hello to the log.");
console.log("passed in arg: " + process.argv[2]);
