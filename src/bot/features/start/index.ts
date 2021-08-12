import { Composer } from "telegraf";
import { start } from "../../props/commands";
import { content } from "../../content";

export default Composer.command(start, async (ctx) => {
  const text = content("start")({
    name: ctx.from.first_name || "friend",
  });

  await ctx.replyWithHTML(text);
});
