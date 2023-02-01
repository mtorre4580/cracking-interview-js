const { isUniqueV1, isUniqueV2 } = require("./isUnique");

describe("isUnique", () => {
  test('should return false for the string "hello"', () => {
    expect(isUniqueV1("hello")).toBeFalsy();
    expect(isUniqueV2("hello")).toBeFalsy();
  });

  test('should return true for the string "aloh"', () => {
    expect(isUniqueV1("aloh")).toBeTruthy();
    expect(isUniqueV2("aloh")).toBeTruthy();
  });

  test('should return false for the string "cac"', () => {
    expect(isUniqueV1("cac")).toBeFalsy();
    expect(isUniqueV2("cac")).toBeFalsy();
  });
});
