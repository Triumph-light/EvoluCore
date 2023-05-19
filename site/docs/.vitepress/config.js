/** @format */

export default {
  themeConfig: {
    siteTitle: 'vitepress',
    nav: [
      {
        text: '指南',
        link: '/guild/introduce'
      },
      {
        text: '组件',
        link: 'components/button/'
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/triumph-light/evolucore' }
    ],
    sidebar: {
      '/guild': [
        {
          text: '引入',
          items: [
            {
              text: '介绍',
              link: '/guild/introduce'
            },
            {
              text: '快速开始',
              link: '/guild/quickstart'
            }
          ]
        },
        {
          text: '进阶',
          items: [
            {
              text: 'xxx',
              link: '/xxx'
            }
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            {
              text: 'Button',
              link: '/components/button'
            }
          ]
        }
      ]
    }
  }
}
