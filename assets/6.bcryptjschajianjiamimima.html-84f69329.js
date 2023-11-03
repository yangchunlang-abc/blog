import{_ as e,o as i,c as n,e as s}from"./app-abc032b7.js";const a={},r=s(`<p>为了保证密码的安全性，不建议在数据库以明文的形式保存用户密码，推荐对密码进行 加密存储</p><ul><li>加密之后的密码，无法被逆向破解</li><li>同一明文密码多次加密，得到的加密结果各不相同，保证了安全性 在当前项目中，使用 <code>bcryptjs</code> 对用户密码进行加密</li></ul><h3 id="下载bcryptjs" tabindex="-1"><a class="header-anchor" href="#下载bcryptjs" aria-hidden="true">#</a> 下载bcryptjs</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i bcryptjs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="封装加密函数" tabindex="-1"><a class="header-anchor" href="#封装加密函数" aria-hidden="true">#</a> 封装加密函数</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//使用插件对密码进行加密和解密

var bcrypt = require(&#39;bcryptjs&#39;)

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在其他文件调用使用即可</p>`,7),d=[r];function l(c,t){return i(),n("div",null,d)}const u=e(a,[["render",l],["__file","6.bcryptjschajianjiamimima.html.vue"]]);export{u as default};
