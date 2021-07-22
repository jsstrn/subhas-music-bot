import { Composer, Context } from "telegraf";
import { content } from "../content";
import { albums } from "../../db/albums";
import { actions } from "./actions";
import { Track } from "../../db/schema";

const formatPrice = (price: number): string => `$${(price / 100).toFixed(2)}`;

const viewAlbumList = async (ctx: Context) => {
  try {
    const albumList = albums.map(({ id, title, artist }) => [
      {
        text: `🎵  ${title} by ${artist.name}`,
        callback_data: `view-album:${id}`,
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
  // @ts-ignore
  const { data } = ctx.callbackQuery;
  const albumId = data.split(":")[1];
  // @ts-ignore
  const { id, title, price, artist } = albums.find((a) => a.id === albumId);

  await ctx.deleteMessage();

  const cover =
    "AgACAgQAAxkDAAICtGD5Klqn7SKXoN9_dnL3r_ErU7UXAAKDrDEb6q7kUM2Hd4D2lCA6AQADAgADcwADIAQ";

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
            callback_data: actions(id).purchase,
          },
        ],
        [
          {
            text: `⬅️  Back to Album List`,
            callback_data: "music",
          },
        ],
      ],
    },
  });
};

const viewTrackList = async (ctx: Context) => {
  try {
    // @ts-ignore
    const { data } = ctx.callbackQuery;
    const albumId = data.split(":")[1];
    // @ts-ignore
    const { tracks } = albums.find((a) => a.id === albumId);

    const trackList = tracks.map(({ id: trackId, title }: Track) => [
      // { text: title, callback_data: `view-track:${albumId}:${trackId}` },
      { text: `🎧  ${title}`, callback_data: `view-track:${trackId}` },
    ]);

    await ctx.deleteMessage();

    await ctx.reply("🎸  Select a track", {
      reply_markup: {
        inline_keyboard: [
          ...trackList,
          [
            {
              text: "⬅️ Back to Album",
              callback_data: `view-album:${albumId}`,
            },
          ],
        ],
      },
    });
  } catch (err) {
    console.error(err);
    await ctx.reply(content(ctx).error);
  }
};

const viewTackInfo = async (ctx: Context) => {
  try {
    // @ts-ignore
    const { data } = ctx.callbackQuery;
    console.log("data - ctx.callbackQuery", ctx.callbackQuery);
    const trackId = data.split(":")[1];
    console.log("track id", trackId);

    const file =
      "https://cdn.pixabay.com/download/audio/2021/02/08/audio_ecc4386888.mp3?filename=background-loop-straight-04-2699.mp3";

    const audio = await ctx.replyWithAudio(file);
    console.log("audio", audio);
  } catch (err) {
    console.error("[ERROR]", err);
    await ctx.reply(content(ctx).error);
  }
};

export default Composer.compose([
  Composer.command("music", viewAlbumList),
  Composer.action("music", viewAlbumList),
  Composer.action(/view-album:.+/, viewAlbumInfo),
  Composer.action(/view-track-list:.+/, viewTrackList),
  Composer.action(/view-track:.+/, viewTackInfo),
]);
