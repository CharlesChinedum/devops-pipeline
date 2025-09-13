import { helpers } from "./helpers";

helpers.logger("Starting tests...");

setTimeout(() => {
  helpers.logger("Waiting 3 seconds...");
}, 3000);

helpers.logger("Tests completed");
