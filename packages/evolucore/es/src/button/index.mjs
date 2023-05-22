import _sfc_main from "./button.vue.mjs";
const withInstall = (component) => {
  component.install = (app) => {
    const name = component.name || component.__name;
    app.component(name, component);
  };
  return component;
};
const EcButton = withInstall(_sfc_main);
export {
  EcButton,
  EcButton as default
};
