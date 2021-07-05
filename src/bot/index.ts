import { Telegraf, Telegram } from "telegraf";
import { telegramBotToken } from "../constants";
import { content } from "./content";
import { commandMenu } from "./commands";

if (!telegramBotToken) {
  throw new Error("[ERROR] Telegram bot token is required.");
}

const bot = new Telegraf(telegramBotToken);
const telegram = new Telegram(telegramBotToken);

telegram.setMyCommands(commandMenu);

bot.start(async (ctx) => await ctx.reply(content(ctx).start));

bot.help(async (ctx) => await ctx.reply(content(ctx).help));

bot.command("about", async (ctx) => await ctx.reply(content(ctx).about));

bot.command("music", async (ctx) => await ctx.reply(content(ctx).music));

bot.command("version", async (ctx) => await ctx.reply(content(ctx).version));

export { bot, telegram };
