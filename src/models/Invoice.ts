import { PROVIDER_TOKEN } from "../constants";
import { v4 as uuid } from "uuid";
import {
  InvoiceParameters,
  Item,
  ItemizedPrice,
  GeneratedInvoice,
  OptionalTipping,
  RequiredCustomerInfo,
} from "./invoice.types";

const CURRENCY = "SGD";
const MAX_TIP_AMOUNT = 10000;
const SUGGESTED_TIP_AMOUNTS = [200, 500, 1000, 1500];

export class Invoice {
  private id: string;

  readonly title: string;
  readonly description: string;
  readonly photo: string;
  readonly payload: string;
  readonly currency: string;
  readonly maxTipAmount: number;
  readonly suggestedTipAmounts: number[];

  public items: Item[];

  constructor({ title, description, photo, items = [] }: InvoiceParameters) {
    this.id = uuid();
    this.title = title;
    this.description = description;
    this.photo = photo;
    this.payload = this.id;

    this.items = items;

    this.currency = CURRENCY;
    this.maxTipAmount = MAX_TIP_AMOUNT;
    this.suggestedTipAmounts = SUGGESTED_TIP_AMOUNTS;
  }

  private generateItemizedPriceList(): ItemizedPrice[] {
    return this.items.map(({ title, price }: Item) => ({
      label: title,
      amount: price,
    }));
  }

  generate(): GeneratedInvoice {
    const optionalTipping: OptionalTipping = {
      max_tip_amount: this.maxTipAmount,
      suggested_tip_amounts: this.suggestedTipAmounts,
    };

    const requiredCustomerInfo: RequiredCustomerInfo = {
      need_name: true,
      need_email: true,
      send_email_to_provider: true,
    };

    return {
      title: this.title,
      description: this.description,
      photo_url: this.photo,
      payload: this.payload,
      provider_token: PROVIDER_TOKEN,
      currency: this.currency,
      prices: this.generateItemizedPriceList(),
      ...optionalTipping,
      ...requiredCustomerInfo,
    };
  }
}
