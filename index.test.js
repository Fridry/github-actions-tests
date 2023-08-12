const {
  addition,
  subtraction,
  multiplication,
  division,
  rest,
  checkNumbers,
} = require("./index");

describe("Github Actions tests", () => {
  it("should sum", () => {
    const result = addition(2, 2);

    expect(result).toBe(4);
  });

  it("should subtract", () => {
    const result = subtraction(2, 2);

    expect(result).toBe(0);
  });

  it("should multiply", () => {
    const result = multiplication(2, 2);

    expect(result).toBe(4);
  });

  it("should divide", () => {
    const result = division(2, 2);

    expect(result).toBe(1);
  });

  it("should return the rest", () => {
    const result = rest(2, 2);

    expect(result).toBe(0);
  });

  it("should return the invalid message", () => {
    const result = addition("a", 2);

    expect(result).toBe("Invalid values");
  });

  it("should check the numbers", () => {
    const result = checkNumbers("a", 2);

    expect(result).toBe("Invalid values");
  });
});
