import { Telegraf, Telegram } from "telegraf";
import { TELEGRAM_BOT_TOKEN } from "../constants";
import { menu } from "./props/commands";
import features from "./features";
import { log } from "../util";
import pug from "pug";
import path from "path";

if (!TELEGRAM_BOT_TOKEN) {
  throw new Error("[ERROR] Telegram bot token is required.");
}

export const bot = new Telegraf(TELEGRAM_BOT_TOKEN);

export const telegram = new Telegram(TELEGRAM_BOT_TOKEN);

telegram.setMyCommands(menu);

bot.use(features);

const fileName = "error.pug";
const filePath = path.join(__dirname, fileName);
const text = pug.compileFile(filePath);

bot.catch((err, ctx) => {
  log.error(err);
  ctx.reply(text());
});
