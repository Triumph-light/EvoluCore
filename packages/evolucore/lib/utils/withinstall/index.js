"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const withInstall = (component) => {
  component.install = (app) => {
    const name = component.name || component.__name;
    app.component(name, component);
  };
  return component;
};
exports.default = withInstall;
