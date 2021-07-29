const FLAGSMITH_API_KEY = process.env.FLAGSMITH_API_KEY as string;
const PROVIDER_TOKEN = process.env.PROVIDER_TOKEN as string;
const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME as string;
const S3_REGION = process.env.S3_REGION as string;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN as string;

export {
  FLAGSMITH_API_KEY,
  PROVIDER_TOKEN,
  S3_BUCKET_NAME,
  S3_REGION,
  TELEGRAM_BOT_TOKEN,
};
