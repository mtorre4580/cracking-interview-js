# BS (Binary Search Tree)

The value of left node must be smaller that the parent node and the value of the right node must be greather than the parent node.

<img src="https://github.com/mtorre4580/cracking-interview-js/blob/main/tree/bst/bst.png" alt="bst" />

```
const tree = {
  value: 40,
  left: {
    value: 30,
    left: {
      value: 25,
      left: null,
      right: null,
    },
    right: {
      value: 35,
      left: null,
      right: null,
    },
  },
  right: {
    value: 50,
    left: {
      value: 45,
      left: null,
      right: null,
    },
    right: {
      value: 60,
      left: null,
      right: null,
    },
  },
};
```
