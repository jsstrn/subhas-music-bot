import { BotCommand } from "telegraf/typings/core/types/typegram";
import { menu } from "./features/props/commands";

const printMenu = (commands: BotCommand[]) =>
  commands
    .map(({ command, description }) => `/${command} – ${description}`)
    .join("\n");

interface MessageContent {
  help: string;
  error: string;
}

export const content: MessageContent = {
  help: `Available commands:\n\n${printMenu(menu)}`,
  error: "Something went wrong. Please try again later.",
};
