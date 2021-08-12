import { Context } from "telegraf";
import { File } from "../../../db/schema";
import { Album } from "../../../models/Album";
import { content } from "../../content";

const sendAlbumInfo = async (ctx: Context, albumId: string) => {
  const album = Album.getById(albumId);

  const { cover, title, artist, description, lyrics, credits, tracks } = album;

  const caption = content("album")({
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
};

const sendTrackFiles = (ctx: Context, albumId: string) => {
  const files = Album.getAllTrackFiles(albumId, {
    mime: "audio/mpeg",
    category: "preview",
  });

  files.forEach(async (file: File) => {
    await ctx.replyWithAudio(file.id);
  });
};

const sendReceipt = async (ctx: Context) => {
  ctx.reply("[TODO] Send receipt");
};

export const fulfillOrder = async (ctx: Context): Promise<void> => {
  // @ts-ignore
  const data = ctx.message.successful_payment;
  const albumId = data.invoice_payload;

  console.log("fulfullOrder", data);

  await sendAlbumInfo(ctx, albumId);
  await sendTrackFiles(ctx, albumId);
  await sendReceipt(ctx);
};
