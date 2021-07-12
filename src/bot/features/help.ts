import { Composer } from "telegraf";
import { content } from "../content";

export default Composer.command(
  "help",
  async (ctx) => await ctx.reply(content(ctx).help)
);
