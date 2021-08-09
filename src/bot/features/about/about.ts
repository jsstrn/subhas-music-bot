import { Composer } from "telegraf";
import { about } from "../../props/commands";
import { content } from "../../content";

export default Composer.command(about, async (ctx) => {
  const text = content("about.pug")({
    name: ctx.from.first_name || "friend",
    bot: ctx.botInfo,
  });

  await ctx.replyWithHTML(text);
});
