import * as index$1 from "./src/index.mjs";
import { Button } from "./src/button/index.mjs";
const index = {
  install: (app) => {
    for (let i in index$1) {
      app.use(index$1[i]);
    }
  }
};
export {
  Button,
  index as default
};
