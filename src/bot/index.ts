import { Telegraf, Telegram } from "telegraf";
import { telegramBotToken } from "../constants";

if (!telegramBotToken) {
  throw new Error("[ERROR] Telegram bot token is required.");
}

const bot = new Telegraf(telegramBotToken);
const telegram = new Telegram(telegramBotToken);

bot.start(async (ctx) => await ctx.reply("Wassup!"));

bot.help(async (ctx) => await ctx.reply("Here is some help"));

export { bot, telegram };
