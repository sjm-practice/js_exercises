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


var arrayA = [1, 7, 3, 4],
    arrayB = [5, 2, 6, 1];

console.log("arrayA products:", getProductsExcludingCurrent(arrayA));
console.log("arrayB products:", getProductsExcludingCurrent(arrayB));

