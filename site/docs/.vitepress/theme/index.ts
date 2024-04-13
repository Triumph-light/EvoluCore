/** @format */

import DefaultTheme from 'vitepress/theme';
import evolucore from '@EvoluCore/components';
import hljs from 'highlight.js';
import 'highlight.js/styles/color-brewer.css';
// @ts-ignore
import preview from '../../components/preview.vue';

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, siteData }) => {
    app.use(evolucore);
    app.directive('highlight', function (el) {
      let blocks = el.querySelectorAll('pre code');
      blocks.forEach((block) => {
        hljs.highlightBlock(block);
      });
    });
    app.component('preview', preview);
  }
};
