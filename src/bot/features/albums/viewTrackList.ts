import { Context, Markup } from "telegraf";
import { content } from "../../content";
import { albums } from "../../../db/albums";
import { Track } from "../../../db/schema";
import { parseCallbackQueryData } from "../../../util";

export const viewTrackList = async (ctx: Context): Promise<void> => {
  try {
    // @ts-ignore
    const { data } = ctx.callbackQuery;
    const { albumId } = parseCallbackQueryData(data);
    // @ts-ignore
    const { tracks } = albums.find((a) => a.id === albumId);

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
  } catch (err) {
    await ctx.reply(content.error);
  }
};
