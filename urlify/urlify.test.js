const { urlifyV1, urlifyV2 } = require("./urlify");

describe("URLify", () => {
  test('should return the string replacing the " " with the ASCII %20', () => {
    expect(urlifyV1("hello world")).toEqual("hello%20world");
    expect(urlifyV2("hello world")).toEqual("hello%20world");
  });

  test('should return the string replacing the " " with the ASCII %20 and trim', () => {
    expect(urlifyV1("hello world    ")).toEqual("hello%20world");
    expect(urlifyV2("   hello world    ")).toEqual("hello%20world");
  });
});
