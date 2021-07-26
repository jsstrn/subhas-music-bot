import { Composer } from "telegraf";
import { requestInvoice } from "./requestInvoice";

export default Composer.compose([
  Composer.action(/request-invoice#.+/, requestInvoice),
]);
