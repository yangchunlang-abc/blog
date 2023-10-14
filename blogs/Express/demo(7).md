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
>前言

JWT（JSON Web Token）是一种用于在网络应用之间传递声明的方法，它是一种基于 JSON 的开放标准（RFC 7519），用于在网络上安全地传输信息。

JWT 令牌通常被用于身份验证和授权，例如当用户登录时，服务器可以生成一个 JWT 令牌，并将其发送回客户端。客户端在接下来的请求中将该令牌作为身份验证凭证发送给服务器，服务器可以验证令牌的有效性，并根据令牌中的声明授权用户访问相应的资源。

### 下载jsonwebtoken
```
npm install jsonwebtoken
```

- 在页面新建文件jwt.js

```
// 引入token
let jwt = require('jsonwebtoken')
let secret = 'yangchunlang'
//生成令牌
exports.generateToken = function (id, res) {
  let payload = { id: id, time: new Date() }
  //token有效期120天
  let token = jwt.sign(payload, secret, { expiresIn: 60 * 60 * 24 * 120 })
  return token
}

// 定义验证令牌的函数
//e是token
exports.verifyToken = function (e) {
  let payload
  // 验证令牌
  jwt.verify(e, secret, function (err, result) {
    // 令牌验证失败
    if (err) { payload = 0 }
    // 令牌验证成功
    else { payload = 1 }
  })
  return payload
}
```
在文件文件jwt.js中定义了，生成令牌和解析令牌的函数

<mark>在用户验证的时候,调用生成令牌函数，生成令牌.并且返回给前端</mark>
```
//用户验证
exports.userMatch = function (data, pwd, res) {
  //查询条件  邮箱或者用户名
  let wherestr = { $or: [{ 'name': data }, { 'email': data }] }
  // 指定需要返回的对象
  let out = { 'name': 1, 'imgurl': 1, 'psw': 1 }

  User.find(wherestr, out).then((result) => {
    //没有找到用户
    if (result == '') {
      res.send({ status: 400 })
    }
    result.map(function (e) {
      // 加密并且验证是否与数据库密码相同
      const pwdMatch = bcrypt.verification(pwd, e.psw)
      //密码一致 生成JWT令牌
      if (pwdMatch) {
        let token = jwt.generateToken(e._id)
        let back = {
          id: e._id,
          name: e.name,
          imgurl: e.imgurl,
          token: token
        }
        //把令牌返回客户端
        res.send({ status: 200, back })
      }
      else {
        //密码不同
        res.send({ status: 400, msg: '用户名或密码错误!' })
      }

    })
  }).catch((err) => {
    //查询出现错误
    res.send({ status: 500 })
  });
}
```

![Snipaste_2023-10-14_19-00-16.png](https://img1.imgtp.com/2023/10/14/WhTIs7LX.png)

此时我们在前端拿到了token就可以存到localstorage里，下次就不用再登录。

当然在用户只有登录了才有token，才能进行其它接口的调用。下面设置了中间件，
```
//token判断
var jwt = require('./dao/jwt')
app.use(function (req, res, next) {
  if (typeof (req.body.token) != 'undefined') {
    //处理token匹配
    let token = req.body.token
    //验证令牌
    let tokenMatch = jwt.verifyToken(token)
    if (tokenMatch == 1) { next() } //通过验证
    else { res.send({ status: 3000 }) } //验证不通过
  }
  else {
    next()
  }
})
```

只有令牌验证通过了才能进行next(),或者没有令牌也能通过

具体来说，该中间件函数会检查请求体中是否包含 token 字段。如果包含，就将该字段的值作为令牌，调用 jwt.verifyToken 函数进行验证。如果验证通过，就调用 next() 方法继续处理下一个中间件或路由处理函数；如果验证不通过，就返回一个 JSON 响应 { status: 3000 }，表示验证失败。

如果请求体中不包含 token 字段，就直接调用 next() 方法继续处理下一个中间件或路由处理函数，即跳过令牌验证步骤。

在前端每次调用请求的时候在req.body添加taken字段，就可以实现验证JWT!!!!

但是一般都是令牌是在header里的，这里放body也因为这是一个app而不是web应用..