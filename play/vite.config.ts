/** @format */

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// @ts-ignore
import DefineOptions from 'unplugin-vue-define-options/vite';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [vue(), DefineOptions()],
  // 配置打包后的路径问题
  base: './'
});
