import { getS3ObjectUrl } from "../../util";

jest.mock("../../constants");

describe("Get S3 Object URL", () => {
  it("returns correct url", () => {
    expect(getS3ObjectUrl("some-key")).toBe(
      "https://some-bucket-name.s3.some-region.amazonaws.com/some-key"
    );
  });
});
