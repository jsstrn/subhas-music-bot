import { Composer } from "telegraf";
import { content } from "../content";
import { s3Region, s3BucketName } from "../../constants";

const getS3ObjectUrl = (fileName: string): string => {
  const protocol = "https";
  const service = "s3";
  const domain = "amazonaws.com";
  return `${protocol}://${s3BucketName}.${service}.${s3Region}.${domain}/${fileName}`;
};

export default Composer.command("music", async (ctx) => {
  try {
    await ctx.replyWithAudio(getS3ObjectUrl("songs/song.mp3"));
  } catch (err) {
    await ctx.reply(content(ctx).error);
  }
});
