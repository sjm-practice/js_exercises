// This is some simple js code, merely to test using the debugger and debugging techniques.

// requiring the colors module, allows colored and styled output to the console
var colors = require('colors');

// grabs the argmuments from the command line, and omit the first two ( > node file.js string_to_rev )
var inputStr = process.argv[2];

function revStr(currStr) {
  var newStr = '';

  // make sure string is not empty or undefined.
  if (typeof currStr === 'undefined' || currStr === null || currStr === '') {
    console.error("invalid or empty string. returning provided string.".underline.red);
    return currStr;
  }

  // start at the end of the provided string, and in reverse order 
  // append each character to a new string
  for (var i = currStr.length - 1; i >= 0; i--) {
    newStr += currStr[i];
  }
  return newStr;
}

console.info("reversing string:", inputStr);
debugger;
console.log("reversed string: %s", revStr(inputStr));

/*   some useful debugger commands
cont, c - continue
step, s - step in
next, n - step over
out, o - step out, to next line outside of current function

watch("varName") - watch("inputStr")     [unwatch("varName")]
watchers - list current expressions being watched

setBreakpoint(lineNum), sb(lineNum)   - sb(21)
clearBreakpoint(lineNum), cb(lineNum)   - sb(21)

repl - starts an interactive inspector type mode (ctrl-c to exit mode)
*/