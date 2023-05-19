'use strict';
Object.defineProperties(exports, {
  __esModule: { value: true },
  [Symbol.toStringTag]: { value: 'Module' }
});
const index$2 = require('./src/index.js');
const index$1 = require('./src/button/index.js');
const index = {
  install: (app) => {
    for (let i in index$2) {
      app.use(index$2[i]);
    }
  }
};
exports.Button = index$1.Button;
exports.default = index;
