import { Composer } from "telegraf";
import { content } from "../content";
import { help } from "./props/commands";

export default Composer.command(
  help,
  async (ctx) => await ctx.reply(content.help)
);
