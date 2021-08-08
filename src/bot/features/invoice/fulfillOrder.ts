import { Context } from "telegraf";
import { Album } from "../../../models/Album";
import pug from "pug";
import path from "path";

const fileName = "album.pug";
const filePath = path.join(__dirname, fileName);
const text = pug.compileFile(filePath);

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

  const caption = text({
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
