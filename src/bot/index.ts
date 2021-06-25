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

flagsmith.hasFeature("start-command").then((enabled) => {
  if (enabled) {
    bot.start(async (ctx) => await ctx.reply("Wassup!"));
  }
});

bot.help(async (ctx) => {
  try {
    const enabled = await flagsmith.hasFeature("help-command");
    if (enabled) await ctx.reply("Here is some help");
  } catch (err) {
    console.error("[Error] Unable to process your request at this time.", err);
    await ctx.reply("Oops! Looks like something went wrong.");
  }
});

export { bot, telegram };
