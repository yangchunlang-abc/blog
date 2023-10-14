import{_ as e,o as n,c as i,e as s}from"./app-e855bf65.js";const d={},l=s(`<blockquote><p>前言</p></blockquote><p>JWT（JSON Web Token）是一种用于在网络应用之间传递声明的方法，它是一种基于 JSON 的开放标准（RFC 7519），用于在网络上安全地传输信息。</p><p>JWT 令牌通常被用于身份验证和授权，例如当用户登录时，服务器可以生成一个 JWT 令牌，并将其发送回客户端。客户端在接下来的请求中将该令牌作为身份验证凭证发送给服务器，服务器可以验证令牌的有效性，并根据令牌中的声明授权用户访问相应的资源。</p><h3 id="下载jsonwebtoken" tabindex="-1"><a class="header-anchor" href="#下载jsonwebtoken" aria-hidden="true">#</a> 下载jsonwebtoken</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install jsonwebtoken
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在页面新建文件jwt.js</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 引入token
let jwt = require(&#39;jsonwebtoken&#39;)
let secret = &#39;yangchunlang&#39;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在文件文件jwt.js中定义了，生成令牌和解析令牌的函数</p><p><mark>在用户验证的时候,调用生成令牌函数，生成令牌.并且返回给前端</mark></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//用户验证
exports.userMatch = function (data, pwd, res) {
  //查询条件  邮箱或者用户名
  let wherestr = { $or: [{ &#39;name&#39;: data }, { &#39;email&#39;: data }] }
  // 指定需要返回的对象
  let out = { &#39;name&#39;: 1, &#39;imgurl&#39;: 1, &#39;psw&#39;: 1 }

  User.find(wherestr, out).then((result) =&gt; {
    //没有找到用户
    if (result == &#39;&#39;) {
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
        res.send({ status: 400, msg: &#39;用户名或密码错误!&#39; })
      }

    })
  }).catch((err) =&gt; {
    //查询出现错误
    res.send({ status: 500 })
  });
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img1.imgtp.com/2023/10/14/WhTIs7LX.png" alt="Snipaste_2023-10-14_19-00-16.png"></p><p>此时我们在前端拿到了token就可以存到localstorage里，下次就不用再登录。</p><p>当然在用户只有登录了才有token，才能进行其它接口的调用。下面设置了中间件，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//token判断
var jwt = require(&#39;./dao/jwt&#39;)
app.use(function (req, res, next) {
  if (typeof (req.body.token) != &#39;undefined&#39;) {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只有令牌验证通过了才能进行next(),或者没有令牌也能通过</p><p>具体来说，该中间件函数会检查请求体中是否包含 token 字段。如果包含，就将该字段的值作为令牌，调用 jwt.verifyToken 函数进行验证。如果验证通过，就调用 next() 方法继续处理下一个中间件或路由处理函数；如果验证不通过，就返回一个 JSON 响应 { status: 3000 }，表示验证失败。</p><p>如果请求体中不包含 token 字段，就直接调用 next() 方法继续处理下一个中间件或路由处理函数，即跳过令牌验证步骤。</p><p>在前端每次调用请求的时候在req.body添加taken字段，就可以实现验证JWT!!!!</p><p>但是一般都是令牌是在header里的，这里放body也因为这是一个app而不是web应用..</p>`,19),a=[l];function r(v,t){return n(),i("div",null,a)}const u=e(d,[["render",r],["__file","demo(7).html.vue"]]);export{u as default};
