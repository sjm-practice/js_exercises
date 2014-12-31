/*
This function will take a string, and return true if there are evenly matching opening
and closing parentheses, braces, and brackets, otherwise false. Also returning false
if they are not properly nested.
*/
function properNesting(sourceStr) {
  var braceCnt = 0,
    bracketCnt = 0,
    parenthesisCnt = 0;

  for (var i = 0; i < sourceStr.length; i++) {
    switch (sourceStr[i]) {
      case '(':
        parenthesisCnt++;
        break;
      case ')':
        parenthesisCnt--;
        break;
      case '{':
        braceCnt++;
        break;
      case '}':
        braceCnt--;
        break;
      case '[':
        bracketCnt++;
        break;
      case ']':
        bracketCnt--;
        break;
    } 

    // Check proper nesting
    if (parenthesisCnt < 0 || braceCnt < 0 || bracketCnt < 0) {
      return false; // reached a closing bracket, before it was opened
    };
  };

  // Nesting has been correct, check all openings have closings
  if (parenthesisCnt === 0 && braceCnt === 0 && bracketCnt === 0) {
    return true;
  } else {
    return false;
  }
}

// grabs the argmuments from the command line, and omit the first two ( > node file.js string_to_rev )
var inputStr = process.argv[2];

if (properNesting(inputStr)) {
  console.log("The provided source code has properly nested brackets.");
} else {
  console.log("The provided source code DOES NOT have properly nested brackets.");
};
