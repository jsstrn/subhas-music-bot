import { Context, Markup } from "telegraf";
import { albums } from "../../../db/albums";

const albumListButtons = albums.map(({ id, title, artist }) => [
  Markup.button.callback(
    `🎵  ${title} by ${artist.name}`,
    `view-album-info#albumId=${id}`
  ),
]);

export const viewAlbumList = async (ctx: Context): Promise<void> => {
  await ctx.deleteMessage();

  await ctx.reply(
    "🎸  Select an album",
    Markup.inlineKeyboard([...albumListButtons])
  );
};
