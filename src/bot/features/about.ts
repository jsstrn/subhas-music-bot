import { Composer } from "telegraf";
import { about } from "./props/commands";
import pug from "pug";
import path from "path";

const file = path.join(__dirname, "..", "content", "about.pug");
const text = pug.compileFile(file);

export default Composer.command(about, async (ctx) => {
  await ctx.replyWithHTML(text({ name: ctx.from.first_name }));
});
