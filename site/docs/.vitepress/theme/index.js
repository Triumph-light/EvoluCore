/** @format */

import DefaultTheme from 'vitepress/theme';
import evolucore from '@EvoluCore/components';

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(evolucore);
  }
};
