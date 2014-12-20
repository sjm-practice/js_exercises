
function mergeSortedArrays(source1, source2) {
  var newArr = [];
  // make copies of original arrays, so not to modify those.
  var arr1 = source1.slice();
  var arr2 = source2.slice();

  while (arr1.length || arr2.length) {
    // note, arr1 and arr2 will not both be empty (the while loop would end first)
    if (!arr1.length) {
      // there are no arr1 values left, so push arr2 value
      newArr.push(arr2.shift());
    } else if (!arr2.length) {
      // there are no arr2 values, so push arr1 value
      newArr.push(arr1.shift());
    } else if (arr1[0] === arr2[0]) {
      // there are two values, and they are equal, so push both
      newArr.push(arr1.shift());
      newArr.push(arr2.shift());
    } else {
      // there are two values, that aren't equal, push the smaller
      arr1[0] < arr2[0] ? newArr.push(arr1.shift()) : newArr.push(arr2.shift());
    }
  }

  return newArr;
}

var arrA = [3, 5, 6, 14, 22];
var arrB = [2, 4];

console.log("arrA: " + arrA);
console.log("arrB: " + arrB);
console.log("merged array: " + mergeSortedArrays(arrA, arrB) + "\n");

var arrA = [3, 6, 14, 22];
var arrB = [2, 4, 14];

console.log("arrA: " + arrA);
console.log("arrB: " + arrB);
console.log("merged array: " + mergeSortedArrays(arrA, arrB) + "\n");
