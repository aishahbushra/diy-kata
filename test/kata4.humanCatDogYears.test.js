const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  test("returns human, cat and dog years in array", () => {
  expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
})

  test("returns human, cat and dog years in array again", () => {
    expect(humanCatDogYears(5)).toEqual([5, 36, 39]);  

  });
});