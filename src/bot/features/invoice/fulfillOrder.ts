import { Context } from "telegraf";
import { Album } from "../../../models/Album";
import { content } from "../../content";

export const fulfillOrder = async (ctx: Context): Promise<void> => {
  // @ts-ignore
  const data = ctx.message.successful_payment;
  const albumId = data.invoice_payload;

  const album = Album.getById(albumId);

  const { cover, title, artist, description, lyrics, credits, tracks } = album;

  const files = Album.getAllTrackFiles(albumId, {
    source: "web",
    category: "preview",
  });

  const caption = content("album.pug")({
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
  });

  files.forEach(async (file) => {
    await ctx.replyWithAudio(file.id);
  });
};
