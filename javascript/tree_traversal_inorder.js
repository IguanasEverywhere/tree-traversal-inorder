class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function treeTraversalInorder(root, result = []) {
  // does root have left?
    //  if yes, call treeTraversalInOrder with left (and result)
    //  push node to result
    // if node has right, call treeTraversalInOrder with right (and result)
    // return result

    if (!root) {
      return [];
    }

    if (root.left) {
      treeTraversalInorder(root.left, result);
    }
    result.push(root.value);

    if (root.right) {
      treeTraversalInorder(root.right, result);
    }
    return result;

}

if (require.main === module) {
  // add your own tests in here
  let root = new Node(2, new Node(-10), new Node(20));
  console.log("Expecting: [-10, 2, 20]");
  console.log(treeTraversalInorder(root));

  console.log("");

  root = new Node(10, new Node(0, null, new Node(5)), new Node(20, null, new Node(30)));
  console.log("Expecting: [0, 5, 10, 20, 30] ");
  console.log(treeTraversalInorder(root));

  console.log("");

  root = new Node(10, new Node(5, new Node(3), new Node(6)), new Node(12, null, new Node(16)))
  console.log("Expecting: [3, 5, 6, 10, 12, 16] ");
  console.log(treeTraversalInorder(root));

  console.log("");

  root = new Node(5)
  console.log("Expecting: [5] ");
  console.log(treeTraversalInorder(root));

  console.log("");

  root = new Node()
  console.log("Expecting: [] ");
  console.log(treeTraversalInorder(root));
}

module.exports = {
  Node,
  treeTraversalInorder
};

// Please add your pseudocode to this file
// And a written explanation of your solution
