import path from "path";
import pug, { compileTemplate } from "pug";

export const content = (fileName: string): compileTemplate => {
  const fileExtension = ".pug";
  const file = fileName + fileExtension;

  const filePath = path.join(__dirname, file);

  console.log('__dirname', __dirname);
  console.log('file', file);
  console.log('filePath', filePath);

  return pug.compileFile(filePath);
};
