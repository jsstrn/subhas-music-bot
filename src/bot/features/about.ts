import { Composer } from "telegraf";
import { content } from "../content";
import { about } from "./props/commands";

export default Composer.command(
  about,
  async (ctx) => await ctx.reply(content(ctx).about)
);
