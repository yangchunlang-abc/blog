---
title: 如何创建一个Express项目
date: 2023/10/11
categories:
-  Express
tags:
  - 后端
  - 服务器接口
---

>前言

由于聊天室App的静态页面已经开发的7788了，我决定接下来着手于后台接口的开发。<br>
接口使用 express + mongodb开发<br>
### 创建一个express项目
先确保电脑存在node.js 和 npm.<br>
打开项目的终端。。。
```
npm install express --save  //安装express框架
```

```
 npm install -g express-generator //安装Express的应用生成器

```

```
express <项目名>  //创建项目
```

接下来，按照终端提示<br>
```
cd <项目名>
npm install
npm start  //启动项目

```

在浏览器输入http://localhost:3000就可以成功看到启动的服务器返回的结果了。
