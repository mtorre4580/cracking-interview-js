const { linearSearch, binarySearch } = require("./search");

const array = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23, 27];

const secondArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];

describe("search", () => {
  test("should find with linear search", () => {
    expect(linearSearch(array, 16)).toBeFalsy();
    expect(linearSearch(secondArray, 6)).toBeTruthy();
  });

  test("should find with binary search", () => {
    expect(binarySearch(array, 16)).toBeFalsy();
    expect(binarySearch(secondArray, 6)).toBeTruthy();
  });
});
