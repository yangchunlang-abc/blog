---
title: Express已经内置了body解析
date: 2023/10/13
categories:
-  Express
tags:
  - 后端
  - 服务器接口
---

在使用body-parser模块时，发现：<br>
使用body-parser中间件,显示bodyParser已被弃用,bodyParser is deprecated.

其实在Express 4.16.0开始，express已经内置了body解析，只需要添加一行配置文件就行
```
const express = require('express');

const app = express();
app.use(express.json());
```