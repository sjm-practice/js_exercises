/*
This script takes a list of numbers, creates a binary tree from those.
Then returns and logs the second largest value in the tree.
*/

// Create a constructor and prototype for a binary tree.
function BinaryTree(initialValue) {
  this.value = initialValue || null;
  this.leftChild = null;
  this.rightChild = null;
}

// Define useful methods for BinaryTree prototype
BinaryTree.prototype.hasNoChildren = function() {
  return this.leftChild === null && this.rightChild === null;
}

BinaryTree.prototype.insertValue = function(newValue) {
  if (this.value === null) {
    this.value = newValue;
  }

  return;
};