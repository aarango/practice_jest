const ramdomStrings = require("../index");

describe("Test functionality", () => {
  test("Test functionality", () => {
    expect(typeof ramdomStrings).toBeDefined();
  });
  test("Dont find Colombia", () => {
    expect(ramdomStrings()).not.toMatch(/London/);
  });
});
