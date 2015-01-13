/*
This script takes a list of numbers, creates a binary tree from those.
Then returns and logs the second largest value in the tree.
*/

// Create a constructor for a binary tree node.
function BinaryTree(initialValue) {
  this.value = initialValue || null;
  this.leftChild = null;
  this.rightChild = null;
}

// PRE coding pseudo code...
// if new empty node, or found an equal value, save in current node
// else                                   (prevents duplicate values)
// if newval < treeNode.val, look left
//    if nothing left, add left
//    else go left, check again
// else (look right)
//    if nothing right, add right
//    else go right, check again
function insertValue(btn, newValue) {
  if (btn.value === null || btn.value === newValue) {
    btn.value = newValue;
  } else {
    if (newValue < btn.value) {
      if (btn.leftChild === null) {
        btn.leftChild = new BinaryTree(newValue);
      } else {
        insertValue(btn.leftChild, newValue);
      }
    } else {
      if (btn.rightChild === null) {
        btn.rightChild = new BinaryTree(newValue);
      } else {
        insertValue(btn.rightChild, newValue);
      }
    }
  }
  return;
}

function maxValue(node) {
  while (node.rightChild !== null) {
    node = node.rightChild;
  }
  return node.value;
}

function getNodeWithMaxValue(node) {
  while (node.rightChild !== null) {
    node = node.rightChild;
  }
  return node;
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
  insertValue(binaryTree, process.argv[i]);
};

console.log("number of leaf nodes:", countLeafNodes(binaryTree));
console.log("max value:", maxValue(binaryTree));
console.log("max value (node):", getNodeWithMaxValue(binaryTree).value);

