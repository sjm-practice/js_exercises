// grabs the argmuments from the command line, and omit the first two ( > node file.js string_to_rev )
var inputStr = process.argv[2];

function revStr(currStr) {
  // note, in javascript, strings are immutable, so a new string must be returned
  // instead of reversing the string order in place
  var newStr = '';

  // make sure string is not empty or undefined.
  if (typeof currStr === 'undefined' || currStr === null || currStr === '') {
    console.log("invalid or empty string. returning provided string.");
    return currStr;
  }

  // start at the end of the provided string, and in reverse order 
  // append each character to a new string
  for (var i = currStr.length - 1; i >= 0; i--) {
    newStr += currStr[i];
  }
  return newStr;
}

console.log("reversing string: " + inputStr);
console.log("reversed string: " + revStr(inputStr));


