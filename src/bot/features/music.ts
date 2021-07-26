import { Composer, Context, Markup } from "telegraf";
import { content } from "../content";
import { albums } from "../../db/albums";
import { Track } from "../../db/schema";
import { parseCallbackQueryData } from "../../util";

const formatPrice = (price: number): string => `$${(price / 100).toFixed(2)}`;

const viewAlbumList = async (ctx: Context) => {
  try {
    const albumList = albums.map(({ id, title, artist }) => [
      Markup.button.callback(
        `🎵  ${title} by ${artist.name}`,
        `view-album-info#albumId=${id}`
      ),
    ]);

    await ctx.deleteMessage();

    await ctx.reply(
      "🎸  Select an album",
      Markup.inlineKeyboard([...albumList])
    );
  } catch (err) {
    await ctx.reply(content(ctx).error);
  }
};

const viewAlbumInfo = async (ctx: Context) => {
  try {
    // @ts-ignore
    const { data } = ctx.callbackQuery;
    const { albumId } = parseCallbackQueryData(data);
    // @ts-ignore
    const { id, title, price, artist, cover } = albums.find(
      (a) => a.id === albumId
    );

    await ctx.deleteMessage();

    await ctx.replyWithPhoto(cover, {
      caption: `🎵  ${title} by ${artist.name}`,
      ...Markup.inlineKeyboard([
        [
          Markup.button.callback(
            `🎧  View Track List`,
            `view-track-list#albumId=${id}`
          ),
        ],
        [
          Markup.button.callback(
            `💳  Buy for ${formatPrice(price)}`,
            `request-invoice#albumId=${id}`
          ),
        ],
        [Markup.button.callback(`⬅️  Back to Album List`, "view-album-list")],
      ]),
    });
  } catch (err) {
    await ctx.reply(content(ctx).error);
  }
};

const viewTrackList = async (ctx: Context) => {
  try {
    // @ts-ignore
    const { data } = ctx.callbackQuery;
    const { albumId } = parseCallbackQueryData(data);
    // @ts-ignore
    const { tracks } = albums.find((a) => a.id === albumId);

    const trackList = tracks.map(
      ({ id: trackId, title }: Track, index: number) => [
        Markup.button.callback(
          `🎧  ${index + 1}. ${title}`,
          `view-track-info#trackId=${trackId}`
        ),
      ]
    );

    const backButton = [
      Markup.button.callback(
        "⬅️ Back to Album",
        `view-album-info#albumId=${albumId}`
      ),
    ];

    await ctx.deleteMessage();

    await ctx.reply(
      "🎸  Select a track",
      Markup.inlineKeyboard([...trackList, backButton])
    );
  } catch (err) {
    await ctx.reply(content(ctx).error);
  }
};

const viewTackInfo = async (ctx: Context) => {
  try {
    // @ts-ignore
    const { data } = ctx.callbackQuery;
    const { trackId } = parseCallbackQueryData(data);
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
  Composer.action(/view-album-info#.+/, viewAlbumInfo),
  Composer.action(/view-track-list#.+/, viewTrackList),
  Composer.action(/view-track-info#.+/, viewTackInfo),
  Composer.action(/request-invoice#.+/, requestInvoice),
]);
