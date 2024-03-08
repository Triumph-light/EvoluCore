import * as components from './index';
// GlobalComponents  for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    EcButton: typeof components.EcButton;
    EcDialog: typeof components.EcDialog;
    EcCalendar: typeof components.EcCalendar;
    EcSelect: typeof components.EcSelect;
  }
}

export {};
