import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  dest: 'docs/.vuepress/dist',
  base: '/blog/',
  title: "Saul的博客",
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
      { text: "主页", link: "/", icon:'Home'},
      { text: '留言板', link: '/docs/message-board', icon: 'Chat' },
    ],
    // 自动设置分类
    autoSetBlogCategories: true,
    // 自动将分类和标签添加至头部导航条
    autoAddCategoryToNavbar: {
      location: 1, // 默认 0
      categoryText: '分类', // 默认 categories
      tagText: '标签' // 默认 tags
    },
    autoSetSeries: true,
  }),

});

