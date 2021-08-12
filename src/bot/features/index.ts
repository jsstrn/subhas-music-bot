import { Composer } from "telegraf";
import start from "./start/start";
import help from "./help/help";
import about from "./about/about";
import version from "./version/version";
import albums from "./albums";
import order from "./order";

export default Composer.compose([
  start,
  help,
  about,
  albums,
  order,
  version,
]);
