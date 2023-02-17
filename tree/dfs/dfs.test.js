const { preOrder, inOrder, postOrder } = require("./dfs");

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

describe("Deep First Search (Tree)", () => {
  test("should return the array walking in preOrder", () => {
    expect(preOrder(tree)).toEqual(["A", "B", "D", "F", "C", "E"]);
  });

  test("should return the array walking in inOrder", () => {
    expect(inOrder(tree)).toEqual(["A", "D", "F", "B", "E", "C"]);
  });

  test("should return the array walking in postOrder", () => {
    expect(postOrder(tree)).toEqual(["F", "D", "E", "C", "B", "A"]);
  });
});
