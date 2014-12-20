// grabs the argmuments from the command line, and omit the first two ( > node file.js arg1 )
var num = process.argv[2];

function fibonacci(n) {
  // check for the base cases first (zero return zero, one return one)
  //    could also prevent negatives number here
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {  // else return the sum of the prior two terms
    return fibonacci(n-1) + fibonacci(n-2);
  }
}

// validate correct number of arguments and input
if (process.argv.length != 3 || isNaN(parseInt(num))) {
  console.log("command format: node fibonacci.js valid_positive_number");
} else {
  console.log("The fibonacci value of " + num + " is: " + fibonacci(parseInt(num)));
}
