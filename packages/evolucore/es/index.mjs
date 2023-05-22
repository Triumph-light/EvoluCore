import * as index$1 from "./src/index.mjs";
import { EcButton } from "./src/button/index.mjs";
const index = {
  install: (app) => {
    for (const c in index$1) {
      app.use(index$1[c]);
    }
  }
};
export {
  EcButton,
  index as default
};
