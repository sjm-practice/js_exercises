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

// find and return max value in binary tree
function getMaxValue(node) {
  while (node.rightChild !== null) {
    node = node.rightChild;
  }
  return node.value;
}

// find and return the node containing the max value
function getNodeWithMaxValue(node) {
  while (node.rightChild !== null) {
    node = node.rightChild;
  }
  return node;
}

// return the value of the a node's parent node
function getMaxParentValue (bt) {
  var parentNodeValue = null;

  while (bt.rightChild !== null) {
    parentNodeValue = bt.value;
    bt = bt.rightChild;
  }
  return parentNodeValue;
}

// get the second largest value in binary tree
// either the parent of the largest, or max of left child
function getSecondMaxValue (bt) {
  var maxValueNode = getNodeWithMaxValue(bt);

  if (maxValueNode.leftChild === null) {
    secondMaxValue = getMaxParentValue(bt);
  } else {
    secondMaxValue = getMaxValue(maxValueNode.leftChild);
  }
  return secondMaxValue;
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
  insertValue(binaryTree, parseInt(process.argv[i], 10));
};

console.log("number of leaf nodes:", countLeafNodes(binaryTree));
console.log("max value:", getMaxValue(binaryTree));
console.log("parent node value:", getMaxParentValue(binaryTree));
console.log("second max value:", getSecondMaxValue(binaryTree));

