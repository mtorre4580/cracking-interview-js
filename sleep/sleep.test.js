const sleep = require("./sleep");

describe("sleep", () => {
  beforeAll(() => {
    jest.useRealTimers();
    jest.spyOn(global, "setTimeout");
  });

  test("should await 2s", async () => {
    const ms = 2000;

    await sleep(ms);

    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), ms);
  });
});
