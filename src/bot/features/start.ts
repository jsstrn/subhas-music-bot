import { Composer } from "telegraf";
import { content } from "../content";
import { start } from "./props/commands";

export default Composer.command(
  start,
  async (ctx) => await ctx.reply(content(ctx).start)
);
