const { isPermutationV1, isPermutationV2 } = require("./isPermutation");

describe("isPermutation", () => {
  test('should return true for the string "hello" is a permutation "olleh"', () => {
    expect(isPermutationV1("hello", "olleh")).toBeTruthy();
    expect(isPermutationV2("hello", "olleh")).toBeTruthy();
  });

  test('should return false for the string "hello" is a permutation "lloes"', () => {
    expect(isPermutationV1("hello", "lloes")).toBeFalsy();
    expect(isPermutationV1("hello", "lloes")).toBeFalsy();
  });

  test("should return false for the string with different size", () => {
    expect(isPermutationV1("hello", "hello a")).toBeFalsy();
    expect(isPermutationV1("hello", "hello a")).toBeFalsy();
  });
});
