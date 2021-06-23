import { bot } from "../bot";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

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
    return {
      statusCode: 500,
      body: JSON.stringify("[Error] Unable to handle bot requests", err),
    };
  }
}
