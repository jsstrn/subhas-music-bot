import { Context } from "telegraf";
import { CallbackQuery } from "telegraf/typings/core/types/typegram";
import { parseCallbackQueryData } from "../../../util";

const file =
  "https://cdn.pixabay.com/download/audio/2021/02/08/audio_ecc4386888.mp3?filename=sample.mp3";

export const viewTackInfo = async (ctx: Context): Promise<void> => {
  const { data } = ctx.callbackQuery as CallbackQuery.DataCallbackQuery;
  const { trackId } = parseCallbackQueryData(data);
  console.log("track id", trackId);

  await ctx.replyWithAudio(file);
};
