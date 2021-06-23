import { APIGatewayProxyResult } from "aws-lambda";

export default async function hello(): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message:
        "Your function was deployed via CI/CD and executed successfully!",
    }),
  };
}
