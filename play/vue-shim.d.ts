/**
 * 声明文件，让ts能够认识*.vue文件
 */

declare module '*.vue'{
  import type { DefineComponent } from 'vue'
  const component:DefineComponent<{},{},any>
}