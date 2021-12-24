const { sayHello } = require("./index");

describe("Github Actions tests", () => {
  test("should ask the name if no name is provided", () => {
    const greeting = sayHello();

    expect(greeting).toBe("Hey man, what's your name again?");
  });

  test("should return a greeting if name is provided", () => {
    const greeting = sayHello("Eduardo");

    expect(greeting).toBe("Hey Eduardo, how are you?");
  });
});
