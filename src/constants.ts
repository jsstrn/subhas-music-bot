const flagsmithApiKey = process.env.FLAGSMITH_API_KEY as string;
const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN as string;
const s3BucketName = process.env.S3_BUCKET_NAME as string;
const s3Region = process.env.S3_REGION as string;

export { flagsmithApiKey, telegramBotToken, s3BucketName, s3Region };
