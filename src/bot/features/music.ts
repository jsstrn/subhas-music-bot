import { Composer, Context } from "telegraf";
import { content } from "../content";
import { albums } from "../../db/albums";
import { Track } from "../../db/schema";
import { parse, ParsedQuery } from "query-string";

const formatPrice = (price: number): string => `$${(price / 100).toFixed(2)}`;

const parseCallbackQuery = (data: string): ParsedQuery => {
  return parse(data);
};

const viewAlbumList = async (ctx: Context) => {
  try {
    const albumList = albums.map(({ id, title, artist }) => [
      {
        text: `🎵  ${title} by ${artist.name}`,
        callback_data: `view-album-info:${id}`,
      },
    ]);

    await ctx.deleteMessage();

    await ctx.reply("🎸  Select an album", {
      reply_markup: {
        inline_keyboard: albumList,
      },
    });
  } catch (err) {
    await ctx.reply(content(ctx).error);
  }
};

const viewAlbumInfo = async (ctx: Context) => {
  try {
    // @ts-ignore
    const { data } = ctx.callbackQuery;
    const albumId = data.split(":")[1];
    // @ts-ignore
    const { id, title, price, artist } = albums.find((a) => a.id === albumId);

    await ctx.deleteMessage();

    const cover =
      "https://fanart.tv/fanart/music/62cfba2f-d6da-4c93-a2e2-a7922fe47d1b/albumcover/the-music-5ac7c0b44f3de.jpg";

    // cover: albums/{id}/cover
    // previews: albums/{id}/previews <= show all previews for an album?
    // previews: albums/{id}/previews/{song-id}

    // share requires
    // 1. inline query
    // 2. inline keyboard => switch inline query

    await ctx.replyWithPhoto(cover, {
      caption: `🎵  ${title} by ${artist.name}`,
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: `🎧  View Track List`,
              callback_data: `view-track-list:${id}`,
            },
          ],
          [
            {
              text: `💳  Buy for ${formatPrice(price)}`,
              callback_data: `request-invoice:${id}`,
            },
          ],
          [
            {
              text: `⬅️  Back to Album List`,
              callback_data: "view-album-list",
            },
          ],
        ],
      },
    });
  } catch (err) {}
};

const viewTrackList = async (ctx: Context) => {
  try {
    // @ts-ignore
    const { data } = ctx.callbackQuery;
    const albumId = data.split(":")[1];
    // @ts-ignore
    const { tracks } = albums.find((a) => a.id === albumId);

    const trackList = tracks.map(({ id: trackId, title }: Track) => [
      { text: `🎧  ${title}`, callback_data: `view-track-info:${trackId}` },
    ]);

    await ctx.deleteMessage();

    await ctx.reply("🎸  Select a track", {
      reply_markup: {
        inline_keyboard: [
          ...trackList,
          [
            {
              text: "⬅️ Back to Album",
              callback_data: `view-album-info:${albumId}`,
            },
          ],
        ],
      },
    });
  } catch (err) {
    await ctx.reply(content(ctx).error);
  }
};

const viewTackInfo = async (ctx: Context) => {
  try {
    // @ts-ignore
    const { data } = ctx.callbackQuery;
    const trackId = data.split(":")[1];
    console.log("track id", trackId);

    const file =
      "https://cdn.pixabay.com/download/audio/2021/02/08/audio_ecc4386888.mp3?filename=sample.mp3";

    await ctx.replyWithAudio(file);
  } catch (err) {
    await ctx.reply(content(ctx).error);
  }
};

const requestInvoice = async (ctx: Context) => {
  try {
    await ctx.reply("🏗  Payment feature is under construction");
  } catch (err) {
    await ctx.reply(content(ctx).error);
  }
};

export default Composer.compose([
  Composer.command("music", viewAlbumList),
  Composer.action("view-album-list", viewAlbumList),
  Composer.action(/view-album-info:.+/, viewAlbumInfo),
  Composer.action(/view-track-list:.+/, viewTrackList),
  Composer.action(/view-track-info:.+/, viewTackInfo),
  Composer.action(/request-invoice:.+/, requestInvoice),
]);
