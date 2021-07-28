import { Composer } from "telegraf";
import { version } from "./props/commands";
import pug from "pug";
import path from "path";

const fileName = "version.pug";
const filePath = path.join(__dirname, "..", "content", fileName);
const text = pug.compileFile(filePath);

const v = process.env.npm_package_version;

export default Composer.command(
  version,
  async (ctx) => await ctx.replyWithHTML(text({ version: v }))
);
