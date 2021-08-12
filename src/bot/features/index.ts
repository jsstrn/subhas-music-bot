import { Composer } from "telegraf";
import start from "./start";
import help from "./help";
import about from "./about";
import version from "./version";
import albums from "./albums";
import error from "./error";
import order from "./order";

export default Composer.compose([
  start,
  help,
  about,
  albums,
  error,
  order,
  version,
]);
