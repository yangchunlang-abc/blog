---
title: 如何设置Express项目跨域
date: 2023/10/11
categories:
-  Express
tags:
  - 后端
  - 服务器接口
---

### 设置Express跨域
首先狭义的同源就是指，域名、协议、端口均为相同.<br>
跨域，是指浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的，是浏览器对JavaScript实施的安全限制。<br>
 这里说明一下，无法跨域是浏览器对于用户安全的考虑，如果自己写个没有同源策略的浏览器，完全不用考虑跨域问题了。是浏览器的锅，同源策略限制了一下行为： Cookie、LocalStorage 和 IndexDB 无法读取 DOM 和 JS 对象无法获取 Ajax请求发送不出去。<br>
 jsonp是一种投机取巧的方法，用《script src=""》来做请求（前面讲浏览器不只限制那两个api），响应的报文字串会被浏览器当作脚本顺便就运行了<br>
**目前我主要使用cors**
<mark>CORS（Cross-Origin Resource Sharing）,跨域资源共享</mark>
当使用XMLHttpRequest发送请求时，如果浏览器发现违反了同源策略就会自动加上一个请求头 origin；<br>

后端在接受到请求后确定响应后会在 Response Headers 中加入一个属性 Access-Control-Allow-Origin；<br>

浏览器判断响应中的 Access-Control-Allow-Origin 值是否和当前的地址相同，匹配成功后才继续响应处理，否则报错.<br>

下面在express的app.js里面设置cors
```
// 允许跨域请求
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// 允许content-type字段
app.options('*', function (req, res) {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
  res.sendStatus(200);
});

```