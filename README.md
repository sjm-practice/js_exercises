# Javascript Exercises

A collection of small / simple javascript programs, written for practice.

## Usage

.js files are solely javascript, written to be run from a command line using node. These can accept arguments from the command line.

    > node  file.js  arg1  arg2  arg3  ...

.html files contain javascript embedded in the script tags, and are to be run via a browser.

## Files / Exercises

**revstr.js** - reverses a string, provided by command line argument. The reversed string is logged to the console. If the string is invalid, an error message is logged. (run from command line using node)

**revstr.html** - prompts a user to enter a string, then alerts the reversed string. If the string is invalid, logs an error message. (run from browser)

**fibonacci.js** - uses recursion to generate the fibonacci value of the provided number (run from command line using node)

**merge\_sorted\_arrays.js** - takes two sorted arrays, and merges them in to one sorted array.

**debug_test.js** - some javascript code, used for practing with the debugger.

**brackets.js** - This function will take a string, and return true if there are evenly matching opening and closing parentheses, braces, and brackets, otherwise false. Also returning false if they are not properly nested.

**stock_sale.js** - This function will take an array of numbers (stock prices), and determine the times of day to buy and sell for the best gain. Where the index of the array represents minutes past the start of open trading.

**binary_search_2nd.js** - This script takes a list of numbers (as parameters from the command line), creates a binary tree from those, then returns and logs the second largest value in the tree.

**array_products.js** - This script takes a given array of numbers, and for
each element computes the product of all array elements except the current
element, returning the array of products.

**meeting_times.js** - This script has a predefined array of meeting start and stop times. The script will return a condensed list of start and stop times, where overlapping times are combined in to one time.
