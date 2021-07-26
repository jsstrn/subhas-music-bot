import { Context } from "telegraf";
import { content } from "../../content";
import { parseCallbackQueryData } from "../../../util";

const file =
  "https://cdn.pixabay.com/download/audio/2021/02/08/audio_ecc4386888.mp3?filename=sample.mp3";

export const viewTackInfo = async (ctx: Context): Promise<void> => {
  try {
    // @ts-ignore
    const { data } = ctx.callbackQuery;
    const { trackId } = parseCallbackQueryData(data);
    console.log("track id", trackId);

    await ctx.replyWithAudio(file);
  } catch (err) {
    await ctx.reply(content(ctx).error);
  }
};
