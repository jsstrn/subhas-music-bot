import { BotCommand } from "telegraf/typings/core/types/typegram";

export const commands = {
  about: "about",
  help: "help",
  music: "music",
  start: "start",
};

export const menu: BotCommand[] = [
  { command: "music", description: "Get all music" },
  { command: "about", description: "Learn more about this bot" },
  { command: "help", description: "List all commands" },
];
