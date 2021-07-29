import { Context } from "telegraf";
import { Album } from "../../../models/Album";
import { Invoice } from "../../../models/Invoice";
import { parseCallbackQueryData } from "../../../util";

export const requestInvoice = async (ctx: Context): Promise<void> => {
  // @ts-ignore
  const data = parseCallbackQueryData(ctx.callbackQuery?.data as string);

  const album = Album.getById(data.albumId as string);

  const details = {
    title: album.title,
    description: `${album.description}`,
    photo: album.cover,
    items: [album],
  };

  const invoice = new Invoice(details).generate();

  await ctx.replyWithInvoice(invoice);
};
