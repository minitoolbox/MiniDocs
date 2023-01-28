import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '迷你开发者工具箱',
    description: '为迷你世界开发者而生的一款工具箱APP',
    theme: defaultTheme({
        logo: '/images/hero.png',
        repo: 'https://github.com/minitoolbox/minitoolbox.github.io',
        navbar: [
            // NavbarItem
            {
                text: '问题反馈',
                link: 'https://support.qq.com/products/405243',
            },
            // NavbarGroup
            {
                text: '友情链接',
                children: [
                    {
                        text: '开发者学院',
                        link: 'https://dev-wiki.mini1.cn',
                    },
                    {
                        text: '星光工作室',
                        link: 'https://ustarry.github.io',
                    },
                ],
            },
        ],
    }),
})