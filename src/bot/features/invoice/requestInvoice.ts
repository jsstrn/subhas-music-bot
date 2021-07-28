import { Context } from "telegraf";
import { content } from "../../content";

export const requestInvoice = async (ctx: Context): Promise<void> => {
  try {
    await ctx.reply("🏗  Payment feature is under construction");
  } catch (err) {
    await ctx.reply(content.error);
  }
};
