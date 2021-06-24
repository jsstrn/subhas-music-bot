import { handleBotRequests } from "../functions";
import { bot } from "../bot";
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

  it("returns status code of 200 upon success", async () => {
    const { statusCode } = await handleBotRequests(event);

    expect(statusCode).toBe(200);
  });

  it("returns status code 500 upon failure", async () => {
    handleUpdate.mockRejectedValueOnce(new Error("Something went wrong"));

    const { statusCode } = await handleBotRequests(event);

    expect(statusCode).toBe(500);
  });

  it("calls handleUpdate only once", async () => {
    await handleBotRequests(event);

    expect(handleUpdate).toHaveBeenCalledTimes(1);
  });

  it("calls handleUpdate with correct arguments", async () => {
    await handleBotRequests(event);

    expect(handleUpdate).toHaveBeenCalledWith({ message: "some request" });
  });
});
