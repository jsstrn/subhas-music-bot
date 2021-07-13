import { Telegraf, Telegram } from "telegraf";
import { TELEGRAM_BOT_TOKEN } from "../constants";
import { commandMenu } from "./commands";
import features from "./features";

if (!TELEGRAM_BOT_TOKEN) {
  throw new Error("[ERROR] Telegram bot token is required.");
}

export const bot = new Telegraf(TELEGRAM_BOT_TOKEN);

export const telegram = new Telegram(TELEGRAM_BOT_TOKEN);

telegram.setMyCommands(commandMenu);

bot.use(features);
