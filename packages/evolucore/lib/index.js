"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const index$5 = require("./src/index.js");
const index$1 = require("./src/infinitescroll/index.js");
const index$2 = require("./src/button/index.js");
const index$3 = require("./src/dialog/index.js");
const index$4 = require("./src/calendar/index.js");
const index = {
  install: (app) => {
    for (const c in index$5) {
      app.use(index$5[c]);
    }
  }
};
exports.EcInifiteScroll = index$1.EcInifiteScroll;
exports.EcButton = index$2.EcButton;
exports.EcDialog = index$3.EcDialog;
exports.EcCalendar = index$4.EcCalendar;
exports.default = index;
