import { bot } from "../bot";
import { handleBotRequests } from "../functions";
import { APIGatewayProxyEvent } from "aws-lambda";

jest.mock("../constants");

const handleUpdate = jest.spyOn(bot, "handleUpdate");
handleUpdate.mockName("handleUpdate");

const event = {} as APIGatewayProxyEvent;
event.body = JSON.stringify({ message: "some request" });

describe("Handle Bot Requests", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("returns status code of 200 upon success", async () => {
    handleUpdate.mockResolvedValueOnce();
    const { statusCode } = await handleBotRequests(event);

    expect(statusCode).toBe(200);
  });

  it("returns status code 500 upon failure", async () => {
    handleUpdate.mockRejectedValueOnce("Something went wrong");

    const { statusCode } = await handleBotRequests(event);

    expect(statusCode).toBe(500);
  });

  it("calls handleUpdate only once", async () => {
    handleUpdate.mockResolvedValueOnce();
    await handleBotRequests(event);

    expect(handleUpdate).toHaveBeenCalledTimes(1);
  });

  it("calls handleUpdate with correct arguments", async () => {
    handleUpdate.mockResolvedValueOnce();
    await handleBotRequests(event);

    expect(handleUpdate).toHaveBeenCalledWith({ message: "some request" });
  });
});
