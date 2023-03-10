# DFS (Deep First Search Tree)

Deep First Search Tree, algorithm for traversing or searching tree

## Transversal

- Pre Order
- In Order
- Post Order

```
const tree = {
  value: "A",
  right: {
    value: "B",
    right: {
      value: "C",
      right: null,
      left: {
        value: "E",
        right: null,
        left: null,
      },
    },
    left: {
      value: "D",
      right: {
        value: "F",
        right: null,
        left: null,
      },
      left: null,
    },
  },
};
```

## Examples

- preOrder `["A", "B", "D", "F", "C", "E"];`

- inOrder `["A", "D", "F", "B", "E", "C"];`

- postOrder `["F", "D", "E", "C", "B", "A"];`