import { Telegraf, Telegram } from "telegraf";
import { telegramBotToken } from "../constants";

if (!telegramBotToken) {
  throw new Error("[ERROR] Telegram bot token is required.");
}

const bot = new Telegraf(telegramBotToken);
const telegram = new Telegram(telegramBotToken);

telegram.setMyCommands([
  { command: "music", description: "Get all available music" },
  { command: "help", description: "Learn how to use the bot" },
  { command: "about", description: "Learn more about this bot" },
]);

bot.start(async (ctx) => {
  await ctx.reply("Wassup!");
});

bot.help(async (ctx) => await ctx.reply("Here is some help"));

bot.command(
  "about",
  async (ctx) => await ctx.reply("Some information about this bot")
);

bot.command(
  "music",
  async (ctx) => await ctx.reply("List of all available albums")
);

export { bot, telegram };
