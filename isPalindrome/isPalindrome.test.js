const { isPalindromeV1 } = require("./isPalindrome");

describe("isPalindrome", () => {
  test('should return true for the palindrome "neuquen"', () => {
    expect(isPalindromeV1("neuquen")).toBeTruthy();
  });

  test('should return true for the palindrome "eye"', () => {
    expect(isPalindromeV1("eye")).toBeTruthy();
  });

  test('should return false for "alf"', () => {
    expect(isPalindromeV1("alf")).toBeFalsy();
  });
});
