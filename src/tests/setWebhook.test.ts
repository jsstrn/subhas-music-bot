import { setWebhook } from "../functions";
import { telegram } from "../bot";
import { WebhookInfo } from "typegram";
import {
  APIGatewayProxyEvent,
  APIGatewayEventRequestContextWithAuthorizer,
  APIGatewayEventDefaultAuthorizerContext,
} from "aws-lambda";

jest.mock("../constants");

const mockSetWebhook = jest.spyOn(telegram, "setWebhook");
mockSetWebhook.mockName("setWebhook");

const mockGetWebhookInfo = jest.spyOn(telegram, "getWebhookInfo");
mockGetWebhookInfo.mockName("getWebhookInfo");

const event = {} as APIGatewayProxyEvent;
event.requestContext = {
  domainName: "some-domain.xyz",
  stage: "some-stage",
} as APIGatewayEventRequestContextWithAuthorizer<APIGatewayEventDefaultAuthorizerContext>;

describe("Set webhook", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("returns status code of 200 upon success", async () => {
    const { statusCode } = await setWebhook(event);

    expect(statusCode).toBe(200);
  });

  it("returns correct webhook info upon success", async () => {
    const webhookInfo = { url: "some-domain.xyz" } as WebhookInfo;
    mockGetWebhookInfo.mockResolvedValueOnce(webhookInfo);

    const { body } = await setWebhook(event);

    expect(JSON.parse(body)).toEqual({ url: "some-domain.xyz" });
  });

  it("returns status code 500 upon failure", async () => {
    mockSetWebhook.mockRejectedValueOnce(new Error("Something went wrong"));

    const { statusCode } = await setWebhook(event);

    expect(statusCode).toBe(500);
  });

  it("calls setWebhook only once", async () => {
    await setWebhook(event);

    expect(telegram.setWebhook).toHaveBeenCalledTimes(1);
  });

  it("calls setWebhook with correct arguments", async () => {
    await setWebhook(event);

    expect(telegram.setWebhook).toHaveBeenCalledWith(
      "some-domain.xyz/some-stage/handleBotRequests"
    );
  });
});
