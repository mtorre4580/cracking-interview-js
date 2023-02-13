const { bubbleSort } = require("./sort");

describe("sort", () => {
  test('sort items using "bubbleSort"', () => {
    const array = [101, 22, -1, 40, 150];

    bubbleSort(array);

    expect(array).toEqual([-1, 22, 40, 101, 150]);
  });
});
