// this statment grabs the argmuments from the command line, 
// and omits the first two (node file)
var args = process.argv.slice(2);

// echo any arguments to the console
console.log("arguments:\n" + args.join('\n') + '\n');

function revStr(currStr) {
  var newStr = '';

  if (typeof currStr === 'undefined' || currStr === null || currStr === '') {
    console.log("invalid or empty string. returning provided string.");
    return currStr;
  }

  for (var i = currStr.length - 1; i >= 0; i--) {
    newStr += currStr[i];
  }
  return newStr;
}

console.log("reversing string: " + args[0]);
console.log("reversed string: " + revStr(args[0]));

