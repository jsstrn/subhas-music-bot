import { Composer } from "telegraf";
import { version } from "../../props/commands";
import { content } from "../../content";

export default Composer.command(version, async (ctx) => {
  const text = content("version")({
    version: process.env.npm_package_version,
  });

  await ctx.replyWithHTML(text);
});
