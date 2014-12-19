// this statment grabs the argmuments from the command line, 
// and omits the first two (node filename.js)
var args = process.argv.slice(2);


function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n-1) + fibonacci(n-2)
  }

  return fibonacci(n) + fibonacci(n-1);
}

if (args.length != 3 || isNaN(parseInt(args[2])) {
  console.log("command format: node fibonacci.js ")
};
console("The")