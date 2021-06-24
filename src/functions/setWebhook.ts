import { telegram } from "../bot";
import { handleBotRequests } from ".";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export default async function setWebhook(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  try {
    const { domainName, stage } = event.requestContext;
    const handler = handleBotRequests.name;
    const url = `${domainName}/${stage}/${handler}`;

    await telegram.setWebhook(url);

    const webhookInfo = await telegram.getWebhookInfo();

    return {
      statusCode: 200,
      body: JSON.stringify(webhookInfo),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify("[Error] Unable to set webhook"),
    };
  }
}
