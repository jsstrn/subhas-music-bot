const { expect } = require("@jest/globals");
const { hello } = require("../functions/handler");

describe("Handler", () => {
  it("returns response object", async () => {
    expect(await hello()).toEqual({
      statusCode: 200,
      body: JSON.stringify({
        message: "Your function executed successfully!",
      }),
    });
  });
});
