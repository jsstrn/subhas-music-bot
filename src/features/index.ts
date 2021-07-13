import flagsmith from "flagsmith-nodejs";
import { FLAGSMITH_API_KEY } from "../constants";

if (!FLAGSMITH_API_KEY) {
  throw new Error("[ERROR] Flagsmith API key is required.");
}

flagsmith.init({
  environmentID: FLAGSMITH_API_KEY,
});

export { flagsmith as ff };
