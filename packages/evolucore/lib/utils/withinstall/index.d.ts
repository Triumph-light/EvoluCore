import type { Plugin } from 'vue';
declare type SFCWithInstall<T> = T & Plugin;
declare const _default: <T>(component: T) => SFCWithInstall<T>;
export default _default;
