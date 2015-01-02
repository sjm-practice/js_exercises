/*
This function will take a string, and return true if there are evenly matching opening
and closing parentheses, braces, and brackets, otherwise false. Also returning false
if they are not properly nested.
*/
function properNesting(sourceStr) {
  var nestingStack = [];

  for (var i = 0; i < sourceStr.length; i++) {
    switch (sourceStr[i]) {
      case '[':
      case '(':
      case '{':
        nestingStack.push(sourceStr[i]);
        break;

      case ')':
        if (nestingStack.length > 0 && nestingStack[nestingStack.length-1] === '(') {
          nestingStack.pop();
        } else {
          return false;   // mismatching open close pair
        }
        break; 

      case '}':
        if (nestingStack.length > 0 && nestingStack[nestingStack.length-1] === '{') {
          nestingStack.pop();
        } else {
          return false;   // mismatching open close pair
        }
        break; 

      case ']':
        if (nestingStack.length > 0 && nestingStack[nestingStack.length-1] === '[') {
          nestingStack.pop();
        } else {
          return false;   // mismatching open close pair
        }
        break; 
    } 
  };
  return nestingStack.length === 0;
}

// grabs the argmuments from the command line, and omit the first two ( > node file.js string_to_rev )
var inputStr = process.argv[2];

if (properNesting(inputStr)) {
  console.log("The provided source code has properly nested brackets.");
} else {
  console.log("The provided source code DOES NOT have properly nested brackets.");
};
