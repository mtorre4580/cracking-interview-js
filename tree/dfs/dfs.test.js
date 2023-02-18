const {
  transversalPreOrder,
  transversalInOrder,
  transversalPostOrder,
} = require("./dfs");
const { treeA, treeB } = require("../__mocks__/trees");

describe("Deep First Search (Tree)", () => {
  describe("transversal tree", () => {
    test("should return the array walking in preOrder", () => {
      expect(transversalPreOrder()(treeA)).toEqual([
        "A",
        "B",
        "D",
        "F",
        "C",
        "E",
      ]);

      expect(transversalPreOrder()(treeB)).toEqual([
        25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90,
      ]);
    });

    test("should return the array walking in inOrder", () => {
      expect(transversalInOrder()(treeA)).toEqual([
        "A",
        "D",
        "F",
        "B",
        "E",
        "C",
      ]);

      expect(transversalInOrder()(treeB)).toEqual([
        4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90,
      ]);
    });

    test("should return the array walking in postOrder", () => {
      expect(transversalPostOrder()(treeA)).toEqual([
        "F",
        "D",
        "E",
        "C",
        "B",
        "A",
      ]);

      expect(transversalPostOrder()(treeB)).toEqual([
        4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25,
      ]);
    });
  });
});
