import { Context } from "telegraf";
import { Album } from "../../../models/Album";
import { filter, flattenDeep } from "lodash";
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

  const filesArray = album.tracks.map((track) => {
    return filter(track.files, { source: "web", category: "preview" });
  });

  const files = flattenDeep(filesArray);

  await ctx.replyWithPhoto(cover, {
    caption: text({
      title,
      description,
      lyrics,
      credits,
      tracks,
      name: artist.name,
    }),
    parse_mode: "HTML",
  });

  files.forEach(async (file) => {
    await ctx.replyWithAudio(file.id);
  });
};