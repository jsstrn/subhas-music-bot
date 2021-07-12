import { Telegraf, Telegram } from "telegraf";
import { telegramBotToken } from "../constants";
import { commandMenu } from "./commands";
import features from "./features";

if (!telegramBotToken) {
  throw new Error("[ERROR] Telegram bot token is required.");
}

export const bot = new Telegraf(telegramBotToken);

export const telegram = new Telegram(telegramBotToken);

telegram.setMyCommands(commandMenu);

bot.use(features);
