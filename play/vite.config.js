/** @format */

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import DefineOptions from 'unplugin-vue-define-options/vite';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [vue(), DefineOptions()]
});
