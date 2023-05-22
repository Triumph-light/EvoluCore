import * as components from './index.ts';
// GlobalComponents  for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    EcButton: typeof components.EcButton;
  }
}

export {};
