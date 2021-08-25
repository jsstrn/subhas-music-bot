import { Context } from "telegraf";
import { CallbackQuery } from "telegraf/typings/core/types/typegram";
import { Album } from "../../../models/Album";
import { Invoice } from "../../../models/Invoice";
import { parseCallbackQueryData } from "../../../util";

export const requestInvoice = async (ctx: Context): Promise<void> => {
  const { data } = ctx.callbackQuery as CallbackQuery.DataCallbackQuery;
  const { albumId } = parseCallbackQueryData(data);

  const album = Album.getById(albumId as string);

  const details = {
    title: album.title,
    description: `${album.description}`,
    payload: album.id,
    photo: album.cover,
    items: [album],
  };

  const invoice = new Invoice(details).generate();

  await ctx.replyWithInvoice(invoice);
};
