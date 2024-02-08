const withInstall = (component) => {
  component.install = (app) => {
    const name = component.name || component.__name;
    app.component(name, component);
  };
  return component;
};
export {
  withInstall as default
};
