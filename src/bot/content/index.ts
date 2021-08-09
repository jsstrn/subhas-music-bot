import pug, { compileTemplate } from "pug";
import path from "path";

export const content = (fileName: string): compileTemplate => {
  const filePath = path.join(__dirname, fileName + ".pug");

  return pug.compileFile(filePath);
};
