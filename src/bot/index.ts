import flagsmith from "flagsmith-nodejs";
import { Telegraf, Telegram } from "telegraf";
import { flagsmithApiKey, telegramBotToken } from "../constants";

if (!flagsmithApiKey) {
  throw new Error('[Error] Feature flag API key is required.')
}

flagsmith.init({
  environmentID: flagsmithApiKey,
});

if (!telegramBotToken) {
  throw new Error("[ERROR] Telegram bot token is required.");
}

const bot = new Telegraf(telegramBotToken);
const telegram = new Telegram(telegramBotToken);

bot.start(async (ctx) => {
  console.log('[/start] – start')
  console.log('[/start] – key', flagsmithApiKey)
  const enabled = await flagsmith.hasFeature("start-command");
  console.log('[/start] – enabled', enabled)
  if (enabled) await ctx.reply("Wassup!");
  console.log('[/start] – end')
});

bot.help(async (ctx) => {
  const enabled = await flagsmith.hasFeature("help-command");
  if (enabled) await ctx.reply("Here is some help");
});

export { bot, telegram };
