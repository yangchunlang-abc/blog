---
title: 使用vuepress搭建博客网站
date: 2023/10/05
categories:
-  博客相关
tags:
  - 前端
  - 博客
---

由于前面服务器过期，现在买服务器还是有点小贵，所以最近又重新捣腾了个静态博客。

## 安装Vuepress
  具体的安装使用方法[官方文档](https://v2.vuepress.vuejs.org/zh/)写的非常详细<br>

  ![OIP.jpg](https://img1.imgtp.com/2023/10/06/LTPORYzI.jpg)

## 使用vuepress-reco主题
  但是呢，Vuepress的博客主题对于我而言太过简约，所以我选择vuepress-reco主题<br>
  当然了，安装方法还是看[文档](https://vuepress-theme-reco.recoluan.com/)比本人靠谱

## 项目上线
  国内使用github始终是速度慢啊，但我用的还是github。<br>创建好仓库后，用github里的actions弄了一个自动化部署。<br>这样我每次上传到github它后自动打包放到另外一个分支，然后开启GitHub Pages，让别人访问你的博客。<br>

  下面是自动化部署文件的配置(.github/workflows/deploy.yml)
  ```
  # name 可以自定义
name: Deploy GitHub Pages
# 触发条件：在 push 到 main/master 分支后，新的 Github 项目 应该都是 main，而之前的项目一般都是 master
on:
  push:
    branches:
      - main
# 任务
jobs:
  build-and-deploy:
    # 服务器环境：最新版 Ubuntu
    runs-on: ubuntu-latest
    steps:
      # 拉取代码
      - name: Checkout
        uses: actions/checkout@v2
        with:
          persist-credentials: false
      # 生成静态文件
      - name: Build
        run: npm install && npm run build
      # 部署到 GitHub Pages
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }} # 也就是我们刚才生成的 secret
          BRANCH: gh-pages # 部署到 gh-pages 分支，因为 main 分支存放的一般是源码，而 gh-pages 分支则用来存放生成的静态文件
          FOLDER: docs/.vuepress/dist # vuepress 生成的静态文件存放的地方
  ```
## 所有流程
```
 npm init
  # 安装vuepress
  npm i vuepress -D
  # 安装主题
  npm i vuepress-theme-reco -D
  # 在package.json的scripts中加入
  "docs:dev": "vuepress dev docs",
  "docs:build": "vuepress build docs",
  # 在根目录下建一个README.md文件，这里就是你的主页内容
  # 在根目录下创建一个docs文件夹
  # docs下创建一个.vuepress文件夹
  # .vuepress下建一个config.js，这就是配置文件
  # 使用主题
  // .vuepress/config.js
  module.exports = {
    theme: 'reco'
  }
  # 本地预览
  npm run docs:dev
  # 生成静态文件 会生成一个dist文件夹,在.vuepress下
  npm run docs:build
  # 然后就可以推送上线了。
```
不得不说，有时候vuepress的热更新不太行，看到代码不生效就重启项目试试，能够少踩很多坑