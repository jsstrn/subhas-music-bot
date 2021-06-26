import flagsmith from "flagsmith-nodejs";
import { Telegraf, Telegram } from "telegraf";
import { flagsmithApiKey, telegramBotToken } from "../constants";

if (!flagsmithApiKey) {
  throw new Error("[Error] Feature flag API key is required.");
}

flagsmith.init({
  environmentID: flagsmithApiKey,
});

if (!telegramBotToken) {
  throw new Error("[ERROR] Telegram bot token is required.");
}

const bot = new Telegraf(telegramBotToken);
const telegram = new Telegram(telegramBotToken);

bot.start(async (ctx) => await ctx.reply("Wassup!"));

bot.help(async (ctx) => await ctx.reply("Here is some help"));

export { bot, telegram };
