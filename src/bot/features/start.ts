import { Composer } from "telegraf";
import { start } from "./props/commands";
import pug from "pug";
import path from "path";

const fileName = 'start.pug'
const filePath = path.join(__dirname, "..", "content", fileName);
const text = pug.compileFile(filePath);

export default Composer.command(
  start,
  async (ctx) => await ctx.replyWithHTML(text({ name: ctx.from.first_name }))
);
