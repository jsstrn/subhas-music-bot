import flagsmith from "flagsmith-nodejs";
import { flagsmithApiKey } from "../constants";

if (!flagsmithApiKey) {
  throw new Error("[ERROR] Flagsmith API key is required.");
}

flagsmith.init({
  environmentID: flagsmithApiKey,
});

export { flagsmith as ff };
