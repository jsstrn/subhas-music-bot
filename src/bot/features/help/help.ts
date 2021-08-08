import { Composer } from "telegraf";
import { content } from "../../content/index";
import { help, menu } from "../../props/commands";

const text = content("menu.pug");
console.log(menu);

export default Composer.command(
  help,
  async (ctx) => await ctx.reply(text({ menu }))
);
