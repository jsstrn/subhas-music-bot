import { Telegraf } from "telegraf";
import { telegramBotToken } from "../constants";

if (!telegramBotToken) {
  throw new Error("[ERROR] Telegram bot token is required.");
}

const bot = new Telegraf(telegramBotToken);

bot.start(async (ctx) => {
  await ctx.reply("Wassup!");
});

export { bot };
