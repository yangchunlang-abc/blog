import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  head: [
    [
        'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
        { rel: 'icon', href: 'logo.png' }
    ]
],
  dest: 'docs/.vuepress/dist',
  base: '/blog/',
  title: "Saul's Blog",
  description: "Sual的博客",
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  theme: recoTheme({
    //评论
    commentConfig: {
      type: 'valine',
      options: {
        appId: 'vMh7VQqrupndwydY8ZQ3TmqM-gzGzoHsz', // your appId
        appKey: '5zPY8ESOBS55OC9kfa96ww5K', // your appKey
        hideComments: false, // 全局隐藏评论，默认 false
        avatar: 'wavatar',
        requiredFields:[]
      },
    },
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "Saul",
    authorAvatar: "/head.png",
    lastUpdatedText: "",
    navbar: [
      { text: "主页", link: "/", icon: 'Home' },
      { text: "分类", link: "/categories/VUE/1/", icon: 'Category' },
      { text: "标签", link: "/tags/javascript/1/", icon: 'Tag' },
      { text: "博客列表", link: "/posts", icon:'Blog'},
      { text: "时间轴", link: "/timeline", icon: 'Time' },
      { text: '留言板', link: '/docs/message-board', icon: 'Chat' },
      { text: "友情链接", link: "/docs/friendship-link", icon: 'Link' },
      { text: "关于我", link: "/docs/about-me", icon: 'User' },
    ],
    // 自动设置分类
    autoSetBlogCategories: true,
    // 自动将分类和标签添加至头部导航条
    // autoAddCategoryToNavbar: {
    //   location: 1, // 默认 0
    //   categoryText: '分类', // 默认 categories
    //   tagText: '标签' // 默认 tags
    // },
    autoSetSeries: true,
  }),

});

