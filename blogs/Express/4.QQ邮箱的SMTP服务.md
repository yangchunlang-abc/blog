---
title: 使用QQ邮箱发送注册成功邮件
date: 2023/10/13
categories:
-  Express
tags:
  - 后端
  - 服务器接口
  - qq邮箱登录
---
### 开启QQ邮箱的SMTP服务和设置授权码
**什么是SMTP服务和授权码?**

SMTP（Simple Mail Transfer Protocol）是一种简单的邮件传输协议，它可以让你在不同的邮件系统之间发送和接收邮件。QQ邮箱开启SMTP服务后,允许使用QQ邮箱在第三方邮件客户端进行邮件发送，例如在Outlook、Foxmail、邮件达人等。

授权码是一种用于验证你身份的16位字符串，它是由QQ邮箱系统自动生成的，授权码相当于你的QQ邮箱软件专用密码，它可以保护你的账号安全，防止密码泄露。设置授权码后，使用QQ邮箱地址和授权码就可以在邮箱客户端中进行邮件发送，而不需要输入你的QQ密码。

**如何开启SMTP服务和设置授权码**
![qqSMTP.png](https://img1.imgtp.com/2023/10/13/KQzd5xoL.png)

![STMP.png](https://img1.imgtp.com/2023/10/13/dgTYNINi.png)

在开启后会跳转至授权码页面,先复制好授权码

### express安装nodemailer插件

```
npm install nodemailer
```
在config页面下新建文件用于存储qq邮箱证书,方便后续更改发送信息的邮箱

```
//qq发邮箱的证书
module.exports = {
  //链接qq邮箱
  qq: {
    user: '发送信息的邮箱',
    pass: '授权码'
  }
}
```
### 配置邮箱内容
创建一个emailserver.js文件配置邮箱内容

```
//应用发送邮件的插件
var nodemailer = require('nodemailer')
//应用证书文件
var credentials = require('../config/credentials')
//创建传输方式
var transporter = nodemailer.createTransport({
  service: 'qq',
  auth: {
    user: credentials.qq.user,
    pass: credentials.qq.pass
  }
})

//注册发送邮件给用户
exports.emailSignUp = function (email, res) {
  //发送信息内容
  let options = {
    from: '2311129161@qq.com',
    to: email,
    subject: '感谢在weetYou注册',
    html: '<span>weetYou欢迎你的加入!</span><a href="#">点击</a>'
  }

  //发送邮件
  transporter.sendMail(options, function (err, res) {
    if (err) {
      res.send('邮箱发送失败!')
      console.log(err);
    }
    else {
      res.send('邮箱发送成功!')
      console.log('邮箱发送成功!');
    }
  })
}
```

定义发送邮箱信息的接口
```
  //发送邮箱
  app.post('/mail', (req, res) => {
    let mail = req.body.mail
    emailserver.emailSignUp(mail, res)
    res.send(mail)
  })
```
### 测试邮箱是否能成功发送消息

在前端页面用户输入了邮箱号，接口返回用户的邮箱号，传入nodemailer插件配置文件，并且向邮件发送自定义的信息。

如图：用户收到邮件
![Snipaste_2023-10-13_19-34-47.png](https://img1.imgtp.com/2023/10/13/s2fOHcU5.png)

![youx.png](https://img1.imgtp.com/2023/10/13/wBk4I7g9.png)