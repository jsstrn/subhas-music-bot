import { Context, Markup } from "telegraf";
import { Album } from "../../../models/Album";
import { Track } from "../../../db/schema";
import { parseCallbackQueryData } from "../../../util";
import { CallbackQuery } from "telegraf/typings/core/types/typegram";

export const viewTrackList = async (ctx: Context): Promise<void> => {
  const { data } = ctx.callbackQuery as CallbackQuery.DataCallbackQuery;
  const { albumId } = parseCallbackQueryData(data);
  const { tracks } = Album.getById(albumId as string);

  const viewTrackButtons = tracks.map(
    ({ id: trackId, title }: Track, index: number) => [
      Markup.button.callback(
        `🎧  ${index + 1}. ${title}`,
        `view-track-info#trackId=${trackId}`
      ),
    ]
  );

  const backToAlbumButton = [
    Markup.button.callback(
      "⬅️ Back to Album",
      `view-album-info#albumId=${albumId}`
    ),
  ];

  await ctx.deleteMessage();

  await ctx.reply(
    "🎸  Select a track",
    Markup.inlineKeyboard([...viewTrackButtons, backToAlbumButton])
  );
};
