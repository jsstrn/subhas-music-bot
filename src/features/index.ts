import flagsmith from "flagsmith-nodejs";
import { flagsmithApiKey } from "../constants";

flagsmith.init({
  environmentID: flagsmithApiKey,
});

export { flagsmith as ff };
