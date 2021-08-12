import { Context } from "telegraf";

export const processOrder = async (ctx: Context): Promise<void> => {
  const isSuccessfulPayment = true;
  const failedPaymentMessage = `😔  Sorry, your payment failed to go through.`;

  await ctx.answerPreCheckoutQuery(isSuccessfulPayment, failedPaymentMessage);
};
