import { Context, Markup } from "telegraf";
import { content } from "../../content";
import { albums } from "../../../db/albums";

const albumListButtons = albums.map(({ id, title, artist }) => [
  Markup.button.callback(
    `🎵  ${title} by ${artist.name}`,
    `view-album-info#albumId=${id}`
  ),
]);

export const viewAlbumList = async (ctx: Context): Promise<void> => {
  try {
    await ctx.deleteMessage();

    await ctx.reply(
      "🎸  Select an album",
      Markup.inlineKeyboard([...albumListButtons])
    );
  } catch (err) {
    await ctx.reply(content.error);
  }
};
