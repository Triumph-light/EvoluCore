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
        link: 'examples/button/'
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
              link: '/examples/button'
            }
          ]
        }
      ],
      '/examples': [
        {
          text: '常规',
          items: [
            {
              text: 'Color 色彩',
              link: '/examples/color/index.md'
            },
            {
              text: 'Border 边框',
              link: '/examples/border/index.md'
            }
          ]
        },
        {
          text: '通用',
          items: [
            {
              text: 'Button 按钮',
              link: '/examples/button/index.md'
            },
            {
              text: 'CheckBox 多选',
              link: '/examples/checkbox/index.md'
            },
            {
              text: 'Input 输入框',
              link: '/examples/input/index.md'
            },
            {
              text: 'Select 下拉框',
              link: '/examples/select/index.md'
            },
            {
              text: 'Space 间距',
              link: '/examples/space/index.md'
            }
          ]
        },
        {
          text: '数据',
          items: [
            {
              text: 'Pagination 分页',
              link: '/examples/pagination/index.md.md'
            },
            {
              text: 'Tree 树型控件',
              link: '/examples/tree/index.md'
            },
            {
              text: 'Table 表格',
              link: '/examples/table/index.md'
            }
          ]
        },
        {
          text: '交互',
          items: [
            {
              text: 'Message 消息提示',
              link: '/examples/message/index.md'
            },
            {
              text: 'Confirm 消息确认',
              link: '/examples/confirm/index.md'
            }
          ]
        },
        {
          text: '业务组件'
        }
      ]
    }
  },
  vite: {
    plugins: [DefineOptions()]
  }
});
