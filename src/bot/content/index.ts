import path from "path";
import pug, { compileTemplate } from "pug";
import { log } from "../../util";

export const content = (fileName: string): compileTemplate => {
  const fileExtension = ".pug";
  const file = fileName + fileExtension;

  const filePath = path.join(__dirname, file);

  log.info(__dirname);
  log.info(file);
  log.info(filePath);

  return pug.compileFile(filePath);
};
