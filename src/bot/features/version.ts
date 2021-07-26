import { Composer } from "telegraf";
import { content } from "../content";
import { version } from "./props/commands";

export default Composer.command(
  version,
  async (ctx) => await ctx.reply(content(ctx).version)
);
