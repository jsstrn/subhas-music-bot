import { Composer } from "telegraf";
import { content } from "../content";
import { getS3ObjectUrl } from "../../util";

export default Composer.command("music", async (ctx) => {
  try {
    await ctx.replyWithAudio(getS3ObjectUrl("songs/song.mp3"));
  } catch (err) {
    await ctx.reply(content(ctx).error);
  }
});
