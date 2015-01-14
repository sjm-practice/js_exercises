/*
This script takes an array of numbers, and returns an array of products
of all elements execpt at the current index.
*/
function getProductsExcludingCurrent (numArray) {
  var productsArray = [],
      currentProduct,
      numArrayLen = numArray.length;

  for (var i = 0; i < numArrayLen; i++) {
    currentProduct = 1;

    for (var j = 0; j < numArrayLen; j++) {
      if (i !== j) {
        currentProduct *= numArray[j];
      }
    }

    productsArray.push(currentProduct);
  }

  return productsArray;
}

/*
This optimized version, per interviewcake, computes and stores the products of all elements
up to the current index. Likewise stores the products of all elements
following the current index.

The product of each matching index of those arrays, will then equal the product of all
elements, excluding the current index value.

This only requires traversing the array three times, or O(3n), instead of O(n*n).

IMHO, a developer needs to consider the complexity of code, along with performance.

Note, the below version could be optimized further, simply by doing the multiplication
in the second for loop, instead of storing there, then doing a seperate third
traversal and multiplication.
*/
function getProductsExcludingCurrent_optimized (numArray) {
  var numArrayLen = numArray.length,
      precedingProducts = [],
      followingProducts = [],
      productsArray = [],
      i;

  // compute and store products of all elements preceding current index
  precedingProducts[0]= 1;
  for (i = 1; i < numArrayLen; i++) {
    precedingProducts[i] = numArray[i-1] * precedingProducts[i-1];
  }

  // compute and store products of all elements following current index
  followingProducts[numArrayLen-1] = 1;
  for (i = 1; i < numArrayLen; i++) {
    followingProducts[numArrayLen-1-i] = followingProducts[numArrayLen-i] * numArray[numArrayLen-i];
  }

  // multiply the preceding and following products of current index
  for (i = 0; i < numArrayLen; i++) {
    productsArray.push(precedingProducts[i] * followingProducts[i]);
  }

  return productsArray;
}


var arrayA = [1, 7, 3, 4],
    arrayB = [5, 2, 6, 1],
    arrayC = [9, 0, 3, 4],
    arrayD = [6, 3],
    arrayE = [5, 2, 8];

console.log("arrayA products:", getProductsExcludingCurrent(arrayA));
console.log("arrayB products:", getProductsExcludingCurrent(arrayB));
console.log("arrayC products:", getProductsExcludingCurrent(arrayC));
console.log("arrayD products:", getProductsExcludingCurrent(arrayD));
console.log("arrayE products:", getProductsExcludingCurrent(arrayE));
console.log("");
console.log("arrayA products (optimized):", getProductsExcludingCurrent_optimized(arrayA));
console.log("arrayB products (optimized):", getProductsExcludingCurrent_optimized(arrayB));
console.log("arrayC products (optimized):", getProductsExcludingCurrent_optimized(arrayC));
console.log("arrayD products (optimized):", getProductsExcludingCurrent_optimized(arrayD));
console.log("arrayE products (optimized):", getProductsExcludingCurrent_optimized(arrayE));
