function compareTree(treeA, treeB) {
  if (treeA === null && treeB === null) {
    return true;
  }

  if (treeA.value !== treeB.value) {
    return false;
  }

  if (treeA === null || treeB === null) {
    return false;
  }

  return (
    compareTree(treeA?.left, treeB?.left) &&
    compareTree(treeA?.right, treeB?.right)
  );
}

module.exports = compareTree;
