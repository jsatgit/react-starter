import add from "./add";

describe("add", function() {
  test("should add two positive numbers correctly", function() {
    expect(add(1, 1)).toBe(2);
  });
});
