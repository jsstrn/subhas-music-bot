import { Composer } from "telegraf";
import startCommand from "./start";
import helpCommand from "./help";
import aboutCommand from "./about";
import musicCommand from "./music";
import versionCommand from "./version";

export default Composer.compose([
  startCommand,
  helpCommand,
  aboutCommand,
  musicCommand,
  versionCommand,
]);
