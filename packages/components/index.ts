/** @format */

import * as components from './src/index';
export * from './src/index';
import { App } from 'vue';

export default {
  install: (app: App) => {
    for (const i in components) {
      // 全局注册组件,app.use方法会传入一个app参数并且自动调用install方法
      app.use(components[i]);
    }
  }
};
