---
title: 用uniapp打造一个聊天室软件(1)
date: 2023/10/07
categories:
-  uniapp
tags:
  - 前端
---
最近有点无聊，一直对app感兴趣。但目前水平不高做不出一个视频网站。<br>
想着写一个聊天室软件吧，博客里记录软件编写遇到的所有问题和心得。<br>
## 安装Hubuilder

什么是uniapp：<br>

uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。<br>

有人说小程序的出现导致了国内前端的衰退，还好有uniapp大统一这么多的小程序<br>

我编写uniapp最喜欢使用[Hubuilder编辑器](https://hx.dcloud.net.cn/)。<br>

## 创建uniapp项目
在Hubuilder的创建项目里创建一个uniapp项目，可以根据自己的爱好使用Vue2或Vue3

![图片](https://img1.imgtp.com/2023/10/07/QREeTB14.png)

懂一些vue就可以使用uniapp还是非常方便的.<br>

可以看出来uniapp和Vue的项目结构大差不差<br>

![图片](https://img1.imgtp.com/2023/10/07/n6xYzIQM.png)

## 配置聊天室的底部导航栏

在page.json里可以配置页面的底部导航栏

![图片](https://img1.imgtp.com/2023/10/07/YR1uy57v.png)
目前的基本配置就已经弄好了....