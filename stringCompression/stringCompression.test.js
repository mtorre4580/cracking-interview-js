const { stringCompressionV1 } = require("./stringCompression");

describe("stringCompression", () => {
  test('should compress the string "aabcccccaaa" to "a2b1c5a3"', () => {
    expect(stringCompressionV1("aabcccccaaa")).toEqual("a2b1c5a3");
  });

  test('should compress the string "aaaabbcddddd" to "a4b2c1d5"', () => {
    expect(stringCompressionV1("aaaabbcddddd")).toEqual("a4b2c1d5");
  });

  test('should return the same string for "acccadde" the compression is greather than the original', () => {
    expect(stringCompressionV1("acccadde")).toEqual("acccadde");
  });
});
