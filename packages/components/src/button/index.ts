/** @format */

import _Button from './button.vue';
//
import type { App, Plugin } from 'vue';
type SFCWithInstall<T> = T & Plugin;

// 自定义install方法
const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any).name || (component as any).__name;
    // 注册组件
    app.component(name, component as SFCWithInstall<T>);
  };
  return component as SFCWithInstall<T>;
};
export const EcButton = withInstall(_Button);
export default EcButton;
