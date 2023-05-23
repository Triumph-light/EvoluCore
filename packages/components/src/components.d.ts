import * as components from './index';
// GlobalComponents  for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    EcButton: typeof components.EcButton;
  }
}

export {};
