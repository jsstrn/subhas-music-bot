import { hello } from "../functions";

jest.mock('../constants')

describe("Hello", () => {
  it("returns response object", async () => {
    expect(await hello()).toEqual({
      statusCode: 200,
      body: JSON.stringify({
        message:
          "Your function was deployed via CI/CD and executed successfully!",
      }),
    });
  });
});