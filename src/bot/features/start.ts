import { Composer } from "telegraf";
import { content } from "../content";

export default Composer.command(
  "start",
  async (ctx) => await ctx.reply(content(ctx).start)
);
