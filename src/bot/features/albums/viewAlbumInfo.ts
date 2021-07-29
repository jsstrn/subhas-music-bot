import { Context, Markup } from "telegraf";
import { albums } from "../../../db/albums";
import { Album } from "../../../models/Album";
import { parseCallbackQueryData } from "../../../util";

const formatPrice = (price: number): string => `$${(price / 100).toFixed(2)}`;

export const viewAlbumInfo = async (ctx: Context): Promise<void> => {
  // @ts-ignore
  const { data } = ctx.callbackQuery;
  const { albumId } = parseCallbackQueryData(data);
  // @ts-ignore
  const { id, title, price, artist, cover } = Album.getById(albumId);

  const viewTrackListButton = [
    Markup.button.callback(
      `🎧  View Track List`,
      `view-track-list#albumId=${id}`
    ),
  ];

  const buyAlbumButton = [
    Markup.button.callback(
      `💳  Buy for ${formatPrice(price)}`,
      `request-invoice#albumId=${id}`
    ),
  ];

  const backToAlbumListButton = [
    Markup.button.callback(`⬅️  Back to Album List`, "view-album-list"),
  ];

  await ctx.deleteMessage();

  await ctx.replyWithPhoto(cover, {
    caption: `🎵  ${title} by ${artist.name}`,
    ...Markup.inlineKeyboard([
      viewTrackListButton,
      buyAlbumButton,
      backToAlbumListButton,
    ]),
  });
};
