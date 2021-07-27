import { parseCallbackQueryData, stringifyCallbackQueryData } from "../../util";

describe("Callback Query Data", () => {
  describe("Stringify callback query data", () => {
    it("returns stringified callback query data for one key/value pair", () => {
      const action = "some-callback-action";
      const data = { someId: "abc123" };

      expect(stringifyCallbackQueryData(action, data)).toBe(
        "some-callback-action#someId=abc123"
      );
    });

    it("returns stringified callback query data for two key/value pairs", () => {
      const action = "some-callback-action";
      const data = { someId: "abc123", anotherId: "def456" };

      expect(stringifyCallbackQueryData(action, data)).toBe(
        "some-callback-action#anotherId=def456&someId=abc123"
      );
    });
  });

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
});
