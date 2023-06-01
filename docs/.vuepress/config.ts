import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import theme from "./theme.js";

export default defineUserConfig({
    lang: 'zh-CN',
    title: '迷梦工坊',
    description: '为迷你世界开发者而生',
    head: [['link', { rel: 'icon', href: '/images/icon.png' }]],
    theme,
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜索文档',
                },
            },
        }),
    ],
})