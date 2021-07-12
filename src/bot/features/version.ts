import { Composer } from "telegraf";
import { content } from "../content";

export default Composer.command(
  "version",
  async (ctx) => await ctx.reply(content(ctx).version)
);
