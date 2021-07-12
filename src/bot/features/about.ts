import { Composer } from "telegraf";
import { content } from "../content";

export default Composer.command(
  "about",
  async (ctx) => await ctx.reply(content(ctx).about)
);
