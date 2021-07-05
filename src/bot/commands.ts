import { BotCommand } from "telegraf/typings/core/types/typegram";

export const commandMenu: BotCommand[] = [
  { command: "music", description: "Get all music" },
  { command: "about", description: "Learn more about this bot" },
  { command: "help", description: "List all commands" },
];
