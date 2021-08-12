import { Composer } from "telegraf";
import { support } from "../../props/commands";
import { content } from "../../content";

export default Composer.command(support, async (ctx) => {
  const text = content("support")({
    name: ctx.from.first_name || "friend",
    email: "feedback@example.com",
  });

  await ctx.replyWithHTML(text);
});
