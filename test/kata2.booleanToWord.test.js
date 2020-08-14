const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns true as yes", () => {
    expect(booleanToWord(true)).toBe('Yes');
})

  test("returns false as no", () => {
    expect(booleanToWord(false)).toBe('No');
  });
});