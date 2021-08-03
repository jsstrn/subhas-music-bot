import { Composer } from "telegraf";
import { requestInvoice } from "./requestInvoice";
import { requestInvoiceRegExp } from "../../props/actions";
import { processOrder } from "./processOrder";
import { fulfillOrder } from "./fulfillOrder";

export default Composer.compose([
  Composer.action(requestInvoiceRegExp, requestInvoice),
  Composer.on("pre_checkout_query", processOrder),
  Composer.on("successful_payment", fulfillOrder),
]);
