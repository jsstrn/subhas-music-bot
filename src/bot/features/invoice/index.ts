import { Composer } from "telegraf";
import { requestInvoice } from "./requestInvoice";
import { requestInvoiceRegExp } from "../../props/actions";

export default Composer.compose([
  Composer.action(requestInvoiceRegExp, requestInvoice),
]);
