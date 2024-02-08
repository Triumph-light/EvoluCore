/** @format */
import { defineConfig } from 'vitepress';
// @ts-ignore
import DefineOptions from 'unplugin-vue-define-options/vite';

export default defineConfig({
  title: 'EvoluCore',
  titleTemplate: '一个快速搭建Vue3组件库的框架',
  themeConfig: {
    siteTitle: 'EvoluCore',
    nav: [
      {
        text: '指南',
        link: '/guide/introduce'
      },
      {
        text: '组件',
        link: 'components/button'
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/triumph-light/evolucore' }
    ],
    sidebar: {
      '/guide': [
        {
          text: '引言',
          items: [
            {
              text: '介绍',
              link: '/guide/introduce'
            },
            {
              text: '快速开始',
              link: '/guide/quickstart'
            }
          ]
        },
        {
          text: '基础组件',
          items: [
            {
              text: '按钮',
              link: '/components/button'
            }
          ]
        }
      ],
      '/components': [
        {
          text: '基础组件',
          items: [
            {
              text: 'Button',
              link: '/components/button'
            }
          ]
        },
        {
          text: '业务组件',
          items: [
            {
              text: 'Button',
              link: '/components/button'
            }
          ]
        }
      ]
    }
  },
  vite: {
    plugins: [DefineOptions()]
  }
});
