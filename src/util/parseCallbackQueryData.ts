import { parse, ParsedQuery } from "query-string";

export const parseCallbackQueryData = (data: string): ParsedQuery => {
  return parse(data.split("#")[1]);
};
