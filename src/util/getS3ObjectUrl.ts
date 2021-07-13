import { S3_BUCKET_NAME, S3_REGION } from "../constants";

export const getS3ObjectUrl = (key: string): string => {
  const protocol = "https";
  const service = "s3";
  const domain = "amazonaws.com";

  return `${protocol}://${S3_BUCKET_NAME}.${service}.${S3_REGION}.${domain}/${key}`;
};
