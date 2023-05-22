"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const button_vue_vue_type_script_setup_true_lang = require("./button.vue.js");
const withInstall = (component) => {
  component.install = (app) => {
    const name = component.name || component.__name;
    app.component(name, component);
  };
  return component;
};
const EcButton = withInstall(button_vue_vue_type_script_setup_true_lang.default);
exports.EcButton = EcButton;
exports.default = EcButton;
