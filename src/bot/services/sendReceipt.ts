import { Context } from "telegraf";
import pdf from "html-pdf";
import { content } from "../content";

export const sendReceipt = async (ctx: Context): Promise<void> => {
  const html = content("receipt")();
  const options = {
    format: "A5",
  };

  // @ts-ignore
  pdf.create(html, options).toFile("tmp/receipt.pdf", (err, { filename }) => {
    console.log("[RECEIPT]", filename);

    ctx.replyWithDocument({
      source: filename,
    });
  });
};
