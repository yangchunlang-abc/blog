---
title: 安装使用nodemon
date: 2023/10/12
categories:
-  Express
tags:
  - 后端
  - 服务器接口
---
在编写调试 Node.js 项目的时候，如果修改了项目的代码，则需要频繁的手动关掉，然后再重新启动，非常繁琐。<br>

现在我们可以使用[nodemon](https://www.npmjs.com/package/nodemon)工具在启动项目后自动重启更改的项目。<br>

### 安装nodemon

```
npm install -g nodemon

```

在package.json的文件里更改启动代码<br>

```
  "scripts": {
    "start": "nodemon ./bin/www" //更改处
  },

```
现在只需要 npm run start即可。<br>