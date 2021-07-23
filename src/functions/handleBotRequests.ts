import { bot } from "../bot";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { log } from "../util";

export default async function handleBotRequests(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  try {
    await bot.handleUpdate(JSON.parse(event.body as string));

    return {
      statusCode: 200,
      body: JSON.stringify(""),
    };
  } catch (err) {
    log.error(err);

    return {
      statusCode: 500,
      body: JSON.stringify("[Error] Unable to handle bot requests"),
    };
  }
}
