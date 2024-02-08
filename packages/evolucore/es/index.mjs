import * as index$1 from "./src/index.mjs";
import { EcInifiteScroll } from "./src/infinitescroll/index.mjs";
import { EcButton } from "./src/button/index.mjs";
import { EcDialog } from "./src/dialog/index.mjs";
import { EcCalendar } from "./src/calendar/index.mjs";
const index = {
  install: (app) => {
    for (const c in index$1) {
      app.use(index$1[c]);
    }
  }
};
export {
  EcButton,
  EcCalendar,
  EcDialog,
  EcInifiteScroll,
  index as default
};
