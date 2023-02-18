const { treeWithBTS } = require("../__mocks__/trees");
const bts = require("./bst");

describe("Binary Search (Tree)", () => {
  test("should return false the element not exists in the tree", () => {
    expect(bts(treeWithBTS, 10)).toBeFalsy();
  });

  test("should return true the element exists in the tree", () => {
    expect(bts(treeWithBTS, 35)).toBeTruthy();
  });
});
