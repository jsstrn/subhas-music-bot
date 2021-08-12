import { Composer } from "telegraf";
import { error } from "../../props/commands";

export default Composer.command(error, async (ctx) => {
  await ctx.reply(
    "🧨 This command throws an error to test if error handling is working correctly"
  );

  throw new Error("This error was triggered by /error.");
});
