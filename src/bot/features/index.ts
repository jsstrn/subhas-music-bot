import { Composer } from "telegraf";
import start from "./start/start";
import help from "./help/help";
import about from "./about/about";
import version from "./version/version";
import albums from "./albums";
import invoice from "./invoice";

export default Composer.compose([
  start,
  help,
  about,
  albums,
  invoice,
  version,
]);
