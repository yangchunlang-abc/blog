---
title: github Pages CSS不生效解决方法
date: 2023/10/05
categories:
-  博客相关
tags:
  - 前端
  - 博客
  - github
---

**在查看github Pages时发现网站的CSS竟然不生效**

![Snipaste_2023-10-06_20-16-03.png](https://img1.imgtp.com/2023/10/06/pXqgun5T.png)

**一番排查发现是vuepress设置的路径问题**

![Snipaste_2023-10-06_20-35-40.png](https://img1.imgtp.com/2023/10/06/7ZmElL4k.png)

**但是在设置完成路径后又出现了下面的情况**

![Snipaste_2023-10-06_20-42-31.png](https://img1.imgtp.com/2023/10/06/2BcGuhZI.png)

**也就是说路由跳转不回去，而是在当前路径又加了一个/blog**
**这个404的问题待解决