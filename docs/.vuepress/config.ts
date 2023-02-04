import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '迷你开发者工具箱',
    description: '为迷你世界开发者而生的一款工具箱APP',
    head: [['link', { rel: 'icon', href: '/images/icon.png' }]],
    theme: defaultTheme({
        logo: '/images/hero.png',
        sidebarDepth: 4,
        repo: 'https://github.com/minitoolbox/minitoolbox.github.io',
        editLinkText: "在Github上编辑此页",
        docsRepo: 'https://github.com/minitoolbox/minitoolbox.github.io',
        docsBranch: 'main',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',
        lastUpdatedText: "上次更新",
        contributorsText: "贡献者",
        notFound: ["此页面不存在或已被删除！"],
        backToHome: "点我返回首页",
        navbar: [
            // NavbarItem
            {
                text: '使用帮助',
                link: '/docs/help/quickstart.md',
            },
            {
                text: '开发教程',
                link: '/docs/development/contents.md',
            },
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