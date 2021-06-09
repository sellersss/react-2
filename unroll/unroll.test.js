const unroll = require("./unroll");

describe("#unroll", function () {
  const squareFour = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];

  const squareThree = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
  ];

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("works with a 4x4 matrix", function () {
    expect(unroll(squareFour)).toEqual([
      1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10
    ]);
  });

  it("works with a 3x3 matrix", function () {
    expect(unroll(squareThree)).toEqual([
      "a", "b", "c", "f", "i", "h", "g", "d", "e"
    ]);
  });
});