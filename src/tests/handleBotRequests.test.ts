import handleBotRequests from "../functions/handleBotRequests";
import { bot } from "../bot";
import { APIGatewayProxyEvent } from "aws-lambda";

describe("Handle Bot Requests", () => {
  const handleUpdate = jest.spyOn(bot, "handleUpdate");
  handleUpdate.mockName("handleUpdate");

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("returns status code of 200 upon success", async () => {
    const event = {} as APIGatewayProxyEvent;
    event.body = JSON.stringify("");
    handleUpdate.mockResolvedValueOnce();
    
    const { statusCode } = await handleBotRequests(event);

    expect(statusCode).toBe(200);
  });

  it("returns status code 500 upon failure", async () => {
    const event = {} as APIGatewayProxyEvent;
    event.body = JSON.stringify("");
    handleUpdate.mockRejectedValueOnce(new Error('Something went wrong'));

    const { statusCode } = await handleBotRequests(event);

    expect(statusCode).toBe(500);
  });

  it("calls handleUpdate only once", async () => {
    const event = {} as APIGatewayProxyEvent;
    event.body = JSON.stringify("");
    handleUpdate.mockResolvedValueOnce();

    await handleBotRequests(event);

    expect(handleUpdate).toHaveBeenCalledTimes(1);
  });
});
