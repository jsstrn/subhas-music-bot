import { Telegraf, Telegram } from "telegraf";
import { TELEGRAM_BOT_TOKEN } from "../constants";
import { content } from "./content";
import { menu } from "./props/commands";
import features from "./features";
import { log } from "../util";

if (!TELEGRAM_BOT_TOKEN) {
  throw new Error("[ERROR] Telegram bot token is required.");
}

export const bot = new Telegraf(TELEGRAM_BOT_TOKEN);

export const telegram = new Telegram(TELEGRAM_BOT_TOKEN);

telegram.setMyCommands(menu);

bot.use(features);

const text = content("error")();

bot.catch((err, ctx) => {
  log.error(err);
  ctx.reply(text);
});
