import { BotCommand } from "telegraf/typings/core/types/typegram";

export const about = "about";
export const error = "error";
export const help = "help";
export const music = "music";
export const start = "start";
export const support = "support";
export const version = "version";

export const menu: BotCommand[] = [
  { command: "music", description: "Get all music" },
  { command: "about", description: "Learn more about this bot" },
  { command: "help", description: "List all commands" },
];
