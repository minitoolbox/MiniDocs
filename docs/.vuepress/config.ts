import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import theme from "./theme.js";

export default defineUserConfig({
    lang: 'zh-CN',
    title: '迷你开发者工具箱',
    description: '为迷你世界开发者而生的一款工具箱APP',
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