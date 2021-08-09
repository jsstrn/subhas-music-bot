import { Context, Markup } from "telegraf";
import { Album } from "../../../models/Album";
import { parseCallbackQueryData } from "../../../util";
import { content } from "../../content";

const formatPrice = (price: number): string => `$${(price / 100).toFixed(2)}`;

export const viewAlbumInfo = async (ctx: Context): Promise<void> => {
  // @ts-ignore
  const { data } = ctx.callbackQuery;
  const { albumId } = parseCallbackQueryData(data);

  // @ts-ignore
  const {
    id,
    artist,
    description,
    title,
    price,
    cover,
    lyrics,
    tracks,
    credits,
  } = Album.getById(albumId as string);

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

  const caption = content('album.pug')({
    title,
    artist,
    description,
    lyrics,
    credits,
    tracks,
  });

  await ctx.replyWithPhoto(cover, {
    caption,
    parse_mode: "HTML",
    ...Markup.inlineKeyboard([
      viewTrackListButton,
      buyAlbumButton,
      backToAlbumListButton,
    ]),
  });
};
