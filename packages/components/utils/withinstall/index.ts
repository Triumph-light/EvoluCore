import type { App, Plugin } from 'vue';
type SFCWithInstall<T> = T & Plugin;

export default <T>(component: T, globalFunction: Function) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any).name || (component as any).__name;
    // 注册组件
    app.component(name, component as SFCWithInstall<T>);
    // 挂载全局组件属性
    if (globalFunction) {
      const reg = /[A-Z]/g;
      const bigSplitIndexs: number[] = [];
      let result;
      while ((result = reg.exec(name))) {
        bigSplitIndexs.push(result.index);
      }
      const globalFunctionName = name.slice(bigSplitIndexs[1]);
      app.config.globalProperties[globalFunctionName] = globalFunction;
      console.log(typeof globalFunction);
    }
  };
  return component as SFCWithInstall<T>;
};
