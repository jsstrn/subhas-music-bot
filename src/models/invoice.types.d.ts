export interface InvoiceParameters {
  title: string;
  description: string;
  photo: string;
  items: Item[];
}

export interface GeneratedInvoice {
  title: string;
  description: string;
  payload: string;
  currency: string;

  photo_url: string;
  max_tip_amount: number;
  suggested_tip_amounts: number[];

  provider_token: string;
  prices: ItemizedPrice[];

  need_name: boolean;
  need_email: boolean;
  send_email_to_provider: boolean;
}

export interface Item {
  title: string;
  price: number;
}

export interface ItemizedPrice {
  label: string;
  amount: number;
}

export interface OptionalTipping {
  max_tip_amount: number;
  suggested_tip_amounts: number[];
}

export interface RequiredCustomerInfo {
  need_name: boolean;
  need_email: boolean;
  send_email_to_provider: boolean;
}
