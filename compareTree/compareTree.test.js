const compare = require("./compareTree");

const treeA = {
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
  left: null,
};

const treeB = { ...treeA };

describe("compareTree", () => {
  test("should return true, the tree are the same", () => {
    expect(compare(treeA, treeB)).toBeTruthy();
  });
});
