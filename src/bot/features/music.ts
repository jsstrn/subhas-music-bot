import { Composer } from "telegraf";
import { content } from "../content";
import { albums } from "../../db/albums";
import { Album } from "../../db/types";
import { actions } from "./actions";

const convertToPrice = (price: number) => {
  return `$${price / 100}`;
};

const showAlbumList = Composer.command("music", async (ctx) => {
  try {
    const albumList = albums.map(({ id, title }) => [
      { text: title, callback_data: actions(id).view },
    ]);

    await ctx.reply("Select an album 🎸", {
      reply_markup: {
        inline_keyboard: albumList,
      },
    });
  } catch (err) {
    await ctx.reply(content(ctx).error);
  }
});

const showAlbum = ({ id, title, price, artist }: Album) =>
  Composer.action(actions(id).view, async (ctx) => {
    // cover: albums/{id}/cover
    // previews: albums/{id}/previews <= show all previews for an album?
    // previews: albums/{id}/previews/{song-id}

    // share requires
    // 1. inline query
    // 2. inline keyboard => switch inline query

    const cover =
      "https://fanart.tv/fanart/music/62cfba2f-d6da-4c93-a2e2-a7922fe47d1b/albumcover/the-music-5ac7c0b44f3de.jpg";

    const caption = `Album: ${title}\nArtist: ${artist.name}`;

    await ctx.replyWithPhoto(cover, {
      caption,
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: `Preview Songs`,
              callback_data: actions(id).preview,
            },
          ],
          [
            {
              text: `Buy for ${convertToPrice(price)}`,
              callback_data: actions(id).purchase,
            },
          ],
        ],
      },
    });
  });

const registerActionsForEachAlbum = albums.map((album) => showAlbum(album));

export default Composer.compose([
  showAlbumList,
  ...registerActionsForEachAlbum,
]);
