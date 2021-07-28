import { Composer } from "telegraf";
import { about } from "../../props/commands";
import pug from "pug";
import path from "path";

const fileName = "about.pug";
const filePath = path.join(__dirname, fileName);
const text = pug.compileFile(filePath);

export default Composer.command(
  about,
  async (ctx) => await ctx.replyWithHTML(text({ name: ctx.from.first_name }))
);
