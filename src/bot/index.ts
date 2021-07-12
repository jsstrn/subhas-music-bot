import { Telegraf, Telegram } from "telegraf";
import { telegramBotToken, s3BucketName, s3Region } from "../constants";
import { content } from "./content";
import { commandMenu } from "./commands";

const getS3ObjectUrl = (fileName: string): string => {
  const protocol = "https";
  const service = "s3";
  const domain = "amazonaws.com";
  return `${protocol}://${s3BucketName}.${service}.${s3Region}.${domain}/${fileName}`;
};

if (!telegramBotToken) {
  throw new Error("[ERROR] Telegram bot token is required.");
}

const bot = new Telegraf(telegramBotToken);
const telegram = new Telegram(telegramBotToken);

telegram.setMyCommands(commandMenu);

bot.start(async (ctx) => await ctx.reply(content(ctx).start));

bot.help(async (ctx) => await ctx.reply(content(ctx).help));

bot.command("about", async (ctx) => await ctx.reply(content(ctx).about));

bot.command("music", async (ctx) => {
  try {
    await ctx.replyWithAudio(getS3ObjectUrl("song.mp3"));
  } catch (err) {
    await ctx.reply(content(ctx).error);
  }
});

bot.command("version", async (ctx) => await ctx.reply(content(ctx).version));

export { bot, telegram };
