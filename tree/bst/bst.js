function bts(tree, value) {
  if (!tree) {
    return false;
  }

  if (tree.value === value) {
    return true;
  }

  if (tree.value > value) {
    return bts(tree.left, value);
  }

  return bts(tree.right, value);
}

module.exports = bts;
