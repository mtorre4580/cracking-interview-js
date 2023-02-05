const { customMap, customFilter, customReduce } = require("./mapFilterReduce");

describe("custom array functions", () => {
  const items = [1, 2, 3, 4, 5, 6];

  beforeAll(() => {
    Array.prototype.customMap = customMap;
    Array.prototype.customFilter = customFilter;
    Array.prototype.customReduce = customReduce;
  });

  test("should apply the custom mapper", () => {
    const double = (n) => n * 2;

    expect(items.map(double)).toEqual(items.customMap(double));
  });

  test("should apply the custom filter", () => {
    const isEven = (n) => n % 2 === 0;

    expect(items.filter(isEven)).toEqual(items.customFilter(isEven));
  });

  test("should apply the custom reduce", () => {
    const sum = (ac, current) => ac + current;

    expect(items.reduce(sum, 0)).toEqual(items.customReduce(sum, 0));
  });
});
