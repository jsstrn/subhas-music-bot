import { parseCallbackQueryData } from "../../util";

describe("Parse callback query data", () => {
  it("returns an object with correct id", () => {
    const data = "some-callback-action#someId=abc123";
    expect(parseCallbackQueryData(data)).toEqual({ someId: "abc123" });
  });

  it("returns an object with correct id", () => {
    const data = "some-callback-action#foo=123&bar=345";
    expect(parseCallbackQueryData(data)).toEqual({ foo: "123", bar: "345" });
  });
});
