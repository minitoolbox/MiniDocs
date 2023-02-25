import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
    hostname: "https://minidocs.skyinncloud.top/",
    author: {
        name: "梦辰",
        url: "https://minidocs.skyinncloud.top/",
    },
    docsDir: "docs",
    displayFooter: true,
    copyright: "迷你开发者工具箱 | Copyright © 2021-2023 梦辰",
    logo: "/images/hero.png",
    repo: "https://github.com/tatsukimengchen/MiniDocs",
    docsRepo: "https://github.com/tatsukimengchen/MiniDocs",
    repoDisplay: false,
    docsBranch: "main",
    editLinkPattern: ":repo/edit/:branch/:path",
    locales: {
        "/": {
          blog: {
            avatar: "http://q.qlogo.cn/headimg_dl?dst_uin=3224815186&spec=640&img_type=jpg",
            description: "普通高中生、迷你开发者工具箱作者、迷你世界高级开发者",
            medias: {
              QQ: "http://wpa.qq.com/msgrd?v=3&uin=3224815186&site=qq&menu=yes",
              BiliBili: "https://space.bilibili.com/399664428",
              Qzone: "https://3224815186.qzone.qq.com/",
              Email: "mailto:s3224815186@163.com",
              GitHub: "https://github.com/tatsukimengchen",
            },
          },
        },
    },
    navbar: [
        // NavbarItem
        {
            text: "使用帮助",
            link: "/help/quickstart.md",
        },
        {
            text: "开发教程",
            link: "/development/contents.md",
        },
        {
            text: "问题反馈",
            link: "https://support.qq.com/products/405243",
        },
        // NavbarGroup
        {
            text: "友情链接",
            children: [
                {
                    text: "开发者学院",
                    link: "https://dev-wiki.mini1.cn",
                },
                {
                    text: "星光工作室",
                    link: "https://ustarry.github.io",
                },
            ],
        },
    ],
    plugins: {
        copyCode: {
            showInMobile: true
        },
        comment: {
            provider: "Waline",
            serverURL: "https://waline.minidocs.skyinncloud.top/",
        },
        blog: {
        },
    },
});
