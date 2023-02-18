function bfs(head, value) {
  const q = [head];

  while (q.length) {
    const node = q.shift();

    if (node.value === value) {
      return true;
    }

    if (node.left) {
      q.push(node.left);
    }

    if (node.right) {
      q.push(node.right);
    }
  }

  return false;
}

module.exports = {
  bfs,
};
