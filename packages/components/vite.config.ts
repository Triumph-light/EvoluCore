/** @format */

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
// @ts-ignore
import DefineOptions from 'unplugin-vue-define-options/vite';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: 'src',
      outputDir: ['../evolucore/es/src', '../evolucore/lib/src/'],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: '../../tsconfig.json'
    }),
    DefineOptions(),
    // 处理已经被gulp处理完的less文件还是less后缀的问题
    {
      name: 'style',
      generateBundle(config, bundle) {
        // 可以获取到打包后的文件目录以及代码code
        const keys = Object.keys(bundle);

        for (const key of keys) {
          const bundler: any = bundle[key as any];
          this.emitFile({
            type: 'asset',
            fileName: key,
            source: bundler.code.replace(/\.less/g, '.css')
          });
        }
      }
    }
  ],
  // 配置全局css变量
  // css:{
  //   preprocessorOptions:{
  //     less:{
  //       additionalData:'@import "./src/assets/styles/variables.less";'
  //     }
  //   }
  // },
  build: {
    // 打包后的文件目录
    outDir: 'es',
    // 压缩
    minify: false,
    rollupOptions: {
      // 忽略打包vue和.less文件
      external: ['vue', /\.less/],
      input: ['index.ts'],
      output: [
        {
          // 打包格式
          format: 'es',
          // 打包后的文件名
          entryFileNames: '[name].mjs',
          // 让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          // 配置打包根目录
          dir: '../evolucore/es'
        },
        {
          //打包格式
          format: 'cjs',
          //打包后文件名
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: '../evolucore/lib'
        }
      ]
    },
    lib: {
      entry: './index.ts'
    }
  }
});
