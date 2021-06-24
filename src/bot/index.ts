import flagsmith from "flagsmith-nodejs";
import { Telegraf, Telegram } from "telegraf";
import { flagsmithApiKey, telegramBotToken } from "../constants";

flagsmith.init({
  environmentID: flagsmithApiKey,
});

if (!telegramBotToken) {
  throw new Error("[ERROR] Telegram bot token is required.");
}

const bot = new Telegraf(telegramBotToken);
const telegram = new Telegram(telegramBotToken);

bot.start(async (ctx) => {
  const enabled = await flagsmith.hasFeature("start-command");
  if (enabled) await ctx.reply("Wassup!");
});

bot.help(async (ctx) => {
  const enabled = await flagsmith.hasFeature("help-command");
  if (enabled) await ctx.reply("Here is some help");
});

export { bot, telegram };
