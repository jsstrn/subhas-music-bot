import { Context } from "telegraf";
import { BotCommand } from "telegraf/typings/core/types/typegram";
import { menu } from "./features/props/commands";

const printCommandMenu = (commands: BotCommand[]) =>
  commands
    .map(({ command, description }) => `/${command} – ${description}`)
    .join("\n");

interface MessageContent {
  start: string;
  help: string;
  about: string;
  music: string;
  version: string;
  error: string;
}

const commandMenu = printCommandMenu(menu);

export const content = (ctx: Context): MessageContent => {
  const firstName = ctx.from?.first_name ?? "friend";
  const packageVersion = process.env.npm_package_version;

  return {
    start: `Hi ${firstName}, I'm a bot that can help you purchase music from your favorite local artists.`,
    help: `Available commands:\n\n${commandMenu}`,
    about: `This bot is built for artists by artists.`,
    music: `List all music.`,
    version: `v${packageVersion}`,
    error: "Something went wrong. Please try again later.",
  };
};
