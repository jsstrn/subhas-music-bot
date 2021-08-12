import { Composer } from "telegraf";
import about from "./about";
import albums from "./albums";
import error from "./error";
import help from "./help";
import order from "./order";
import support from "./support";
import start from "./start";
import version from "./version";

export default Composer.compose([
  about,
  albums,
  error,
  help,
  order,
  support,
  start,
  version,
]);
