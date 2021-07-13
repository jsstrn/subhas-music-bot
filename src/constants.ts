const flagsmithApiKey = process.env.FLAGSMITH_API_KEY as string;
const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN as string;
const s3BucketName = process.env.S3_BUCKET_NAME as string;
const s3Region = process.env.S3_REGION as string;

export { flagsmithApiKey, telegramBotToken, s3BucketName, s3Region };

const FLAGSMITH_API_KEY = process.env.FLAGSMITH_API_KEY;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME;
const S3_REGION = process.env.S3_REGION;

export { FLAGSMITH_API_KEY, TELEGRAM_BOT_TOKEN, S3_BUCKET_NAME, S3_REGION };
