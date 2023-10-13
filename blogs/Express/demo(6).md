---
title: 使用bcryptjs插件加密密码
date: 2023/10/13
categories:
-  Express
tags:
  - 后端
  - 服务器接口
  - nodejs登录
---
为了保证密码的安全性，不建议在数据库以明文的形式保存用户密码，推荐对密码进行 加密存储
- 加密之后的密码，无法被逆向破解
- 同一明文密码多次加密，得到的加密结果各不相同，保证了安全性
在当前项目中，使用 `bcryptjs` 对用户密码进行加密
### 下载bcryptjs
```
npm i bcryptjs
```
### 封装加密函数

```
//使用插件对密码进行加密和解密

var bcrypt = require('bcryptjs')

//加密 生成hash密码 
//e是前端传递的密码
exports.encryption = function (e) {
  //生成随机salt
  let salt = bcrypt.genSaltSync(10)
  //生成hash密码
  let hash = bcrypt.hashSync(e, salt)
  return hash
}

//解密 用于对比数据库验证数据
exports.verification = function (e, hash) {
  let verif = bcrypt.compareSync(e, hash)
  return verif
}
```
在其他文件调用使用即可