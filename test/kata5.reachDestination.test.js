const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination((distance = 44), (speed = 10))).toBe(
      "I should be there in 4.5 hours"
    );
  });
});
