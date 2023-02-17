function transversalPreOrder() {
  const stack = [];

  return function walk(node) {
    if (!node) return stack;

    stack.push(node.value);

    walk(node.left);
    walk(node.right);

    return stack;
  };
}

function transversalInOrder() {
  const stack = [];

  return function walk(node) {
    if (!node) return stack;

    walk(node.left);

    stack.push(node.value);

    walk(node.right);

    return stack;
  };
}

function transversalPostOrder() {
  const stack = [];

  return function walk(node) {
    if (!node) return stack;

    walk(node.left);
    walk(node.right);

    stack.push(node.value);

    return stack;
  };
}

const preOrder = transversalPreOrder();
const inOrder = transversalInOrder();
const postOrder = transversalPostOrder();

module.exports = {
  preOrder,
  inOrder,
  postOrder,
};
