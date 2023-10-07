---
title: 博客网站的优化
date: 2023/10/05
categories:
-  博客相关
tags:
  - 前端
  - 博客
---

博客网站虽然建好了，但是还有很多功能没有实现。<br>
这种时候我们一般借助一些插件实现想要的功能。<br>
本人不才哈，也希望某一天能够自己开发一个大家都喜欢用的插件。


## 利用valien实现评论功能
  Valine 诞生于2017年8月7日，是一款基于LeanCloud的快速、简洁且高效的无后端评论系统。——来自官网的介绍<br>
  很多时候看看[官方文档](https://valine.js.org/)也就知其所以然了。<br>
  按照惯例 先下载插件
  ```
  npm install --save vuepress-plugin-comment
  ```
  插件的基本配置(具体的配置看官网)<br>
  appid和appkey要注册使用[LeanCloud](https://www.leancloud.cn/)评论系统，不花钱，但是要实名认证。<br>
  在LeanCloud里创建实例，就可以获得appid和appkey粘贴到下面配置即可。
  ```
  module.exports = {
  plugins: [
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine', 
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: '#valine-vuepress-comment',
          appId: 'Your own appId',
          appKey: 'Your own appKey'
        }
      }
    ]
  ]
}
  ```
  在这样的配置下评论区会全局使用，也就是在每个文章下面都会有评论区。

  这是评论区的样式,更多的样式可以自己魔改主题。不过我把重心放在博客上也就不折腾样式了。

![评论区](https://img1.imgtp.com/2023/10/06/ZaJlAWBi.png)
##  其他插件
插件可谓是丰富多样，遗憾的是很多都基于vuepress1<br>
我现在使用的vuepress2很多都是不兼容的，下载并配置后没反应。