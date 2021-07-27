import { parse, ParsedQuery, stringify } from "query-string";

const SEPARATOR = "#";

interface KeyValue {
  [key: string]: string;
}

export const stringifyCallbackQueryData = (
  action: string,
  data: KeyValue
): string => {
  return `${action}${SEPARATOR}${stringify(data)}`;
};

export const parseCallbackQueryData = (data: string): ParsedQuery => {
  return parse(data.split(SEPARATOR)[1]);
};
