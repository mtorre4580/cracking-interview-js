const { treeA, treeB } = require("../__mocks__/trees");
const { bfs } = require("./bfs");

describe("Bread First Search (Tree)", () => {
  test("should return true for the elements", () => {
    expect(bfs(treeA, "C")).toBeTruthy();
    expect(bfs(treeB, 35)).toBeTruthy();
  });

  test("should return false for the elements", () => {
    expect(bfs(treeA, "K")).toBeFalsy();
    expect(bfs(treeB, 100)).toBeFalsy();
  });
});
