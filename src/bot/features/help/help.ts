import { Composer } from "telegraf";
import { content } from "../../content";
import { help, menu } from "../../props/commands";

export default Composer.command(help, async (ctx) => {
  const text = content("menu")({ menu });

  await ctx.replyWithHTML(text);
});
