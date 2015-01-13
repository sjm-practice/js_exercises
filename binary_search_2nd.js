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

// PRE coding pseudo code...
// if new empty node, or found an equal value, save in current node
// else                                   (prevents duplicate values)
// if newval < treeNode.val, look left
//    if nothing left, add left
//    else go left, check again
// else (look right)
//    if nothing right, add right
//    else go right, check again
BinaryTree.prototype = {
  insertValue: function(newValue) {
    if (this.value === null || this.value === newValue) {
      this.value = newValue;
    } else {
      if (newValue < this.value) {
        if (this.leftChild === null) {
          this.leftChild = new BinaryTree(newValue);
        } else {
          this.leftChild.insertValue(newValue);
        }
      } else {
        if (this.rightChild === null) {
          this.rightChild = new BinaryTree(newValue);
        } else {
          this.rightChild.insertValue(newValue);
        };
      }
    }

    return;
  }
}

function maxValue(node) {
  if (node.rightChild !== null) {
    return maxValue(node.rightChild)
  }
  return node.value;
}

// use recursion to count the number of nodes
// adding all left nodes to all right nodes, using stack to store sum
function countLeafNodes(node) {
  if (node === null) {
    return 0;
  }

  if (node.leftChild === null && node.rightChild === null) {
    return 1;
  }

  return countLeafNodes(node.leftChild) + countLeafNodes(node.rightChild);
}

var binaryTree = new BinaryTree();

for (var i = 2; i < process.argv.length; i++) {
  binaryTree.insertValue(process.argv[i]);
};

console.log("number of leaf nodes:", countLeafNodes(binaryTree));
console.log("max value:", maxValue(binaryTree));

