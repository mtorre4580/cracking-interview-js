const Stack = require("./stack");

describe("Stack", () => {
  test("should stack the history of urls", () => {
    const stackHistory = new Stack();

    const url_1 = "https://www.google.com";
    const url_2 = "https://www.amazon.com";
    const url_3 = "https://www.amazon.com/Apple-iPhone-XR-64GB-White";

    stackHistory.push(url_1);
    stackHistory.push(url_2);
    stackHistory.push(url_3);

    expect(stackHistory.length()).toEqual(3);

    expect(stackHistory.pop()).toEqual(url_3);
    expect(stackHistory.pop()).toEqual(url_2);
    expect(stackHistory.pop()).toEqual(url_1);

    expect(stackHistory.length()).toEqual(0);
  });
});
